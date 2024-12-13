import { useState } from "react";
import { useParams } from 'react-router-dom';

function AddReview() {
    const { id } = useParams()
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [rating, setRating] = useState(0)

    function HandleFormSubmit(e) {
        if (rating === 0) {
            alert("inserire un voto");
        } else {
            const formData = {
                name,
                text,
                vote: rating
            }

            fetch(`http://localhost:3000/movies/${id}/review`, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: { "Content-Type": "application/json" }
            })
                .then(res => res.json)
                .then(data => console.log(data))
        }

    }

    return (
        <>
            <div id="form-card" className="card mb-4">
                <div className="card-body">

                    <h3>Leave your review</h3>

                    <form onSubmit={HandleFormSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name">User name</label>
                            <input name="name" id="name" type="text" className="form-control" placeholder="mario" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>

                        <div className="rating mb-3 text-warning">
                            {[1, 2, 3, 4, 5].map(n => <i key={n} className={`bi bi-star${n <= rating ? '-fill' : ''} `} onClick={() => setRating(n)}></i>)}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="text">Your review</label>
                            <textarea className="form-control" name="text" id="text" placeholder="leave your review here " value={text} onChange={(e) => setText(e.target.value)} required></textarea>
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