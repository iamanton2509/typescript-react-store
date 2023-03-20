interface IComment {
    name: string;
    body: string;
}

const Comments = ({name, body}: IComment) => {
    return (
        <section className="section">
            <div className="comment">
                <h3 className="comment__title">{name}</h3>
                <p className="comment__text">{body}</p>
            </div>
        </section>
    );
}

export default Comments;