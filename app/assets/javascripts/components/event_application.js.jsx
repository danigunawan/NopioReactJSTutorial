var EventApplication = React.createClass({
  getInitialState: function() {
    return {
      events: this.props.events,
      sort: 'name',
      order: 'asc'
    }
  },

  handleSearch: function(events) {
    this.setState({ events: events });
  },

  handleAdd: function(event) {
    var events = this.state.events;
    events.push(event);
    this.setState({ events: events });
  },

  handleDeleteRecord: function(event) {
    var events = this.state.events.slice();
    var index = events.indexOf(event);
    events.splice(index, 1);
    this.setState({ events: events });
  },

  handleUpdateRecord: function(old_event, event) {
    var events = this.state.events.slice();
    var index = events.indexOf(old_event);
    events.splice(index, 1, event);
    this.setState({ events: events });
  },

  handleSortColumn: function(name, order) {
    var that = this;
    if (this.state.sort != name) {
      order = 'asc';
    }
    $.ajax({
      url: '/events',
      data: { sort_by: name, order: order },
      method: 'GET',
      success: function(data) {
        that.setState({ events: data, sort: name, order: order });
      },
      error: function(xhr, status, error) {
        alert('Cannot sort events: ', error);
      }
    });
  },

  render: function(){
    return(
      <div className='container'>
        <div className="jumbotron">
          <h1>ReactJS Tutorial</h1>
          <p>by Piotr Jaworski</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <SearchForm handleSearch={this.handleSearch} />
          </div>
          <div className="col-md-8">
            <NewForm handleAdd={this.handleAdd} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <EventTable events={this.state.events} sort={this.state.sort} order={this.state.order} handleDeleteRecord={this.handleDeleteRecord} handleUpdateRecord={this.handleUpdateRecord} handleSortColumn={this.handleSortColumn}/>
          </div>
        </div>
      </div>
    )
  }
})
