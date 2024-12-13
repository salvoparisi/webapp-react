import { useState } from "react";

function AddReview() {
    const [username, setUsername] = useState('')
    const [review, setReview] = useState('')
    const [rating, setRating] = useState(0)

    function HandleFormSubmit(e) {
        e.preventDefault();
        const formData = {
            username,
            review,
            vote: rating
        }
        console.log(formData);

    }

    return (
        <>
            <div id="form-card" className="card mb-4">
                <div className="card-body">

                    <h3>Leave your review</h3>

                    <form onSubmit={HandleFormSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username">User name</label>
                            <input name="username" id="username" type="text" className="form-control" placeholder="mario" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>

                        <div className="rating mb-3 text-warning">
                            {[1, 2, 3, 4, 5].map(n => <i key={n} className={`bi bi-star${n <= rating ? '-fill' : ''} `} onClick={() => setRating(n)}></i>)}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="review">Your review</label>
                            <textarea className="form-control" name="review" id="review" placeholder="leave your review here " value={review} onChange={(e) => setReview(e.target.value)} required></textarea>
                        </div>

                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">Send</button>
                        </div>

                    </form>

                </div>
            </div>
        </>
    )
}

export default AddReview