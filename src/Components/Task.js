import 'bootstrap/dist/css/bootstrap.min.css';

const task = (props) => {
    let task = null;
    if(!props.deleting)
        task = (
            <button className="btn btn-sm btn-danger" onClick={props.deleteHandler}>DELETE</button>
        );
    else
        task = (
            <div className="text-center p-3">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    return (
        <div className="container shadow-sm my-3 pt-3 rounded">
            <div className="row">
                <div className="col-md-8 p-3 ">
                    <h6 className="text-left lead">{props.title}</h6>
                    <p className="text-left">{props.desc}</p>
                </div>
                <div className="col-md-4 p-3 text-right">
                    {task}
                </div>
            </div>
        </div>
    );
}

export default task;