var EventTable = React.createClass({
  handleDeleteRecord: function(event) {
    this.props.handleDeleteRecord(event);
  },
  handleUpdateRecord: function(old_event, event) {
    this.props.handleUpdateRecord(old_event, event);
  },

  handleSortColumn: function(name, order) {
    this.props.handleSortColumn(name, order);
  },

  render: function(){
    var that = this;
    var events = this.props.events.map(function(event){
      return(
        <Event event={event} key={'event' + event.id} handleDeleteRecord={that.handleDeleteRecord} handleUpdateRecord={that.handleUpdateRecord}/>
      );
    });

    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-2 sortable">
              <SortColumn name="name" text="Name" handleSortColumn={this.handleSortColumn} sort={this.props.sort} order={this.props.order}/>
            </th>
            <th className="col-md-2 sortable">
              <SortColumn name="event_date" text="Date" handleSortColumn={this.handleSortColumn} sort={this.props.sort} order={this.props.order}/>
            </th>
            <th className="col-md-3 sortable">
              <SortColumn name="place" text="Place" handleSortColumn={this.handleSortColumn} sort={this.props.sort} order={this.props.order}/>
            </th>
            <th className="col-md-3 sortable">
              <SortColumn name="description" text="Description" handleSortColumn={this.handleSortColumn} sort={this.props.sort} order={this.props.order}/>
            </th>
            <th className="col-md-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events}
        </tbody>
      </table>
    )
  }
})
