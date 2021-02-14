const input = (props) => {
    return (
        <div className="row">
            <label className="col-sm-0">{props.label}</label>
            <div className="col-sm-12">
                <input type="text" onChange={props.onChange} value={props.value} name={props.name} className="form-control" placeholder={props.placeholder}></input>
            </div>
        </div>
    );
}

export default input;