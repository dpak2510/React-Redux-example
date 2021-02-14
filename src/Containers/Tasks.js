import { Component } from "react";
import { connect } from 'react-redux';
import Task from './../Components/Task';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './../Components/Input';
import actionCreators from './../Actions/actionCreators'


class Tasks extends Component{
    
    state = {
        newTitle: '',
        newDesc: '',
        deleting: false,
    }

    submitHandler = function (e){
        e.preventDefault();
        this.props.addCreator({
            title: this.state.newTitle, 
            desc: this.state.newDesc,
            deleting: false
        });
        this.setState({ newTitle:'', newDesc:''});
    }

    changeHandler = function(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    deleteHandler = function(title) {
        this.props.deleteCreator(title);
    }

    componentDidMount = function(){
        this.props.loadCreator();
    }

    render()
    {
        let page = null;
        if(this.props.loaded)
        {
            const tasks = this.props.tasks.map( task => {
                return (<Task key={task.title} 
                            title={task.title} 
                            desc={task.desc} 
                            deleting={task.deleting}
                            deleteHandler={() => { this.deleteHandler(task.title) } }></Task>);
                });
            page =  (
                <div>
                    {tasks}
                    <form className="form-horizontal mt-4" onSubmit={this.submitHandler.bind(this)}>
                        <div className="form-group">
                            <Input 
                            label=""
                            placeholder="Enter Title"
                            name='newTitle'
                            value={this.state.newTitle}
                            onChange={this.changeHandler.bind(this)}></Input>
                        </div>
                        <div className="form-group">
                            <Input 
                                label=""
                                name='newDesc' 
                                value={this.state.newDesc}
                                placeholder="Enter Description"
                                onChange={this.changeHandler.bind(this)}></Input>
                        </div>
                        <button className=" btn btn-success">ADD</button>
                    </form>
                </div>
                );
        }
        else
        {
            page = (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
        }

        return(
            <div className="container p-3 my-3 shadow">
                <h1 className="text-center mb-3">TASK MANAGER</h1>
                {page}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        loaded: state.loaded
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCreator: (payload) => { dispatch(actionCreators.addCreator(payload)) },
        deleteCreator: (title) => { dispatch(actionCreators.deleteActionCreator(title)) },
        loadCreator: () => { dispatch(actionCreators.loadActionCreator()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);