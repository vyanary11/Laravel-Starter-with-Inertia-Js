<template>
    <div class="clearfix mb-3">
        <div v-if="haslengthMenu" class="dataTables_length float-left mr-2" id="data-table_length">
            <div class="form-inline">
                <div class="form-group">
                    <span class="mr-2 d-none d-sm-block">Tampilkan</span>
                    <select name="data-table_length" aria-controls="data-table" class="form-control"
                        v-model="tableLength" @change="updateTableLength">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    <span class="ml-2 d-none d-sm-block">data</span>
                </div>
            </div>
        </div>
        <div v-if="enableBulk" class="float-sm-left ml-2">
            <select v-model="selectedBulkAction" ref="bulkActions" class="form-control" @change="performBulkAction">
                <option value="">Tindakan</option>
                <option v-for="action in bulkActions" :value="action" :key="action.route">{{ action.label }}</option>
            </select>
        </div>
        <div v-if="hasSearching" class="float-sm-right">
            <input class="form-control" name="data-table_search" type="search"
                placeholder="Pencarian" aria-label="Search" v-model="searchKeyword" @input="performSearch">
        </div>
    </div>
    <table class="table table-striped responsive" id="data-table" width="100%"
        style="width: 100% !important; margin: 0 auto;" ref="dataTable">
        <thead>
            <tr>
                <th v-if="enableBulk" class="text-center" data-priority="1">
                    <div class="custom-checkbox custom-checkbox-table custom-control">
                        <input type="checkbox" v-model="selectAll" @change="toggleAllRows" class="custom-control-input" id="checkbox-all">
                        <label style="cursor: pointer" for="checkbox-all" class="custom-control-label">&nbsp;</label>
                    </div>
                </th>
                <th v-if="hasNumbering" data-priority="3">
                    No.
                </th>
                <th v-for="column in columns" :key="column.data" :data-priority="column.priority">{{ column.title }}</th>
                <th v-if="hasAction" data-priority="4" width="auto">Tindakan</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
</template>

<script>
    import DataTable from 'datatables.net-bs4';
    import 'datatables.net-responsive-bs4';
    import 'datatables.net-select-bs4';

    export default {
        props: {
            haslengthMenu: {
                type: Boolean,
                default: true,
            },
            hasSearching: {
                type: Boolean,
                default: true,
            },
            hasAction: {
                type: Boolean,
                default: false,
            },
            hasNumbering: {
                type: Boolean,
                default: true,
            },
            enableBulk: {
                type: Boolean,
                default: false,
            },
            bulkActions: {
                type: Array,
                default: () => [],
            },
            ajaxUrl: {
                type: String,
                default: '', // Replace with your server-side data URL
            },
            columns: {
                type: Array,
                default: () => [],
            },
        },
        data() {
            return {
                dataTable: null,
                selectAll: false,
                selectedRows: [],
                selectedBulkAction: '',
                searchKeyword: '',
                tableLength: '10',
                tableColumns: this.columns,
            };
        },
        mounted() {
            const data_table = this;
            this.initializeDataTable();
            const parentElement = document.getElementById('data-table');
            parentElement.addEventListener('change', (event) => {
                if (event.target.matches('[data-checkbox-role="child"]')) {
                    event.preventDefault();
                    event.stopPropagation();
                    if(event.target.checked){
                        if (!this.selectedRows.includes(event.target.value)) {
                            this.selectedRows.push(event.target.value);
                        }
                    }else{
                        const index = this.selectedRows.indexOf(event.target.value);
                        if (index !== -1) {
                            this.selectedRows.splice(index, 1);
                        }
                    }
                }
            });
            this.dataTable.on('draw', function(){
                if (data_table.enableBulk) {
                    var len = data_table.dataTable.column(2, {page: 'current'}).data().length;
                    var rowcollection = $(data_table.$refs.dataTable).find('input[type="checkbox"]:checked');
                    if (len == rowcollection.length) {
                        $('#checkbox-all').prop('checked', true);
                    } else {
                        $('#checkbox-all').prop('checked', false);
                    }
                    data_table.resetSelection();
                }
            })
        },
        computed:{

        },
        methods: {
            initializeDataTable() {
                this.updateColumnConfiguration();

                this.dataTable = new DataTable(this.$refs.dataTable, {
                    dom: "tipr",
                    language: {
                        url: "https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Indonesian.json",
                    },
                    lengthChange: false,
                    searching: true,
                    responsive: true,
                    processing: true,
                    serverSide: true,
                    ajax: {
                        url: this.ajaxUrl,
                        type: 'GET',
                        data: (data) => {
                            return {
                                draw: data.draw,
                                start: data.start,
                                length: data.length,
                                // search: {
                                //     value: this.searchKeyword,
                                // },
                            };
                        },
                        error: function (xhr, error, code) {
                            if (code == "Unauthorized") {
                                location.reload();
                            }
                        }
                    },
                    order:[],
                    columns: this.tableColumns,
                });
            },
            updateColumnConfiguration() {
                const checkboxColumn = {
                    className: "text-center",
                    data: 'id',
                    orderable: false,
                    searchable: false,
                    createdCell: (cell, cellData, rowData, rowIndex, cellIndex) => {
                        if ($.inArray($(cell).find('input').data('id'), this.selectedRows) !== -1) $(cell).find('input').attr('checked', 'checked')
                    }
                };

                const numberingColumn = {
                    data: 'DT_RowIndex',
                    orderable: false,
                    searchable: false,
                };


                const actionColumn = {
                    orderable: false,
                    searchable: false,
                    data: 'action',
                    name: 'action'
                };

                // Filter out existing special columns
                this.tableColumns = this.tableColumns.filter((column) => {
                    return column.data !== 'id' &&
                        column.data !== 'numberingColumn' &&
                        column.data !== 'actionColumn';
                });

                if (this.hasNumbering) {
                    // Add the numberingColumn to the beginning of the columns array
                    this.tableColumns.unshift({
                        data: 'numberingColumn',
                        ...numberingColumn
                    });
                }

                if (this.enableBulk) {
                    // Add the checkboxColumn to the beginning of the columns array
                    this.tableColumns.unshift({
                        data: 'id',
                        ...checkboxColumn
                    });
                }

                if (this.hasAction) {
                    // Add the actionColumn to the end of the columns array
                    this.tableColumns.push({
                        data: 'actionColumn',
                        ...actionColumn
                    });
                }
            },
            toggleAllRows() {
                console.log(this.selectAll)
                const checkboxes = $(this.$refs.dataTable).find('input[data-checkbox-role="child"]');
                if (this.selectAll) {
                    // Select all rows
                    for (let index = 0; index < checkboxes.length; index++) {
                        this.selectedRows.push(checkboxes[index].value);
                    }
                    // Update the state of the child checkboxes
                    checkboxes.prop('checked', true);
                } else {
                    // Deselect all rows
                    this.selectedRows = [];
                    // Update the state of the child checkboxes
                    checkboxes.prop('checked', false);
                }
            },
            performBulkAction() {
                // Perform the bulk action using the selected rows and the selectedBulkAction value
                console.log('Performing bulk action:', this.selectedBulkAction, 'Selected rows:', this.selectedRows);

                if (this.selectedRows.length == 0) {
                    // Show SweetAlert when no rows are selected
                    this.$swal.fire({
                        title: 'No Rows Selected',
                        text: 'Please select at least one row to perform the bulk action.',
                        icon: 'warning',
                        confirmButtonText: 'OK',
                    });
                }else{
                    // Perform the action using this.$inertia.js or Axios
                    if (this.selectedBulkAction && this.selectedBulkAction.route && this.selectedBulkAction.routeMethod) {
                        const { route, routeMethod, label } = this.selectedBulkAction;
                        const actionIds = this.selectedRows;

                        this.$swal.fire({
                            title: 'Confirm '+label,
                            text: 'Are you sure you want to '+label+' ?',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonText: 'Yes',
                            cancelButtonText: 'No',
                            showLoaderOnConfirm: true,
                            backdrop:true,
                            preConfirm: () => {
                                // Return a promise that performs the deletion
                                return new Promise((resolve, reject) => {
                                    // Perform the action based on the routeMethod
                                    switch (routeMethod) {
                                        case 'delete':
                                            // Example: Delete the selected rows
                                            this.$inertia.post(route, { ids: actionIds }, {
                                                onSuccess: (response) => {
                                                    resolve(response);
                                                },
                                                onError: (error) => {
                                                    reject(error);
                                                }
                                            });
                                            break;
                                        case 'update':
                                            // Example: Update the selected rows
                                            this.$inertia.put(route, { ids: actionIds }, {
                                                onSuccess: (response) => {
                                                    resolve(response);
                                                },
                                                onError: (error) => {
                                                    reject(error);
                                                }
                                            });
                                            break;
                                        // Add more cases for other route methods as needed
                                        default:
                                            console.warn('Invalid route method:', routeMethod);
                                            break;
                                    }
                                });
                            },
                            allowOutsideClick: () => !this.$swal.isLoading()
                        }).then((result) => {
                            if (result.isConfirmed) {
                                // Deletion confirmed, perform necessary actions
                                console.log(label+' successfully');
                                console.log(result);
                                this.reload(); // Reload the data table
                                // Reset the selection
                                this.resetSelection();
                            }
                        }).catch((error) => {
                            // Handle any error during the preConfirm or AJAX request
                            console.error('Error '+label+':', error);
                        });
                    } else {
                        console.warn('Invalid bulk action:', this.selectedBulkAction);
                    }
                }
                this.selectedBulkAction = '';
            },
            resetSelection() {
                this.selectAll = false;
                this.selectedRows = [];
                const checkboxes = $(this.$refs.dataTable).find('input[data-checkbox-role="child"]');
                checkboxes.prop('checked', false);
            },
            performSearch() {
                this.dataTable.search(this.searchKeyword).draw();
            },
            updateTableLength() {
                this.dataTable.page.len(this.tableLength).draw();
            },
            reload() {
                if (this.dataTable) {
                    this.dataTable.ajax.reload(); // Reload the AJAX data
                }
            },
        },
    };
</script>

<style link="top">
    @import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
    @import 'datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css';
    @import 'datatables.net-select-bs4/css/select.bootstrap4.min.css';
    .bulk-actions {
        margin-bottom: 10px;
    }
</style>
