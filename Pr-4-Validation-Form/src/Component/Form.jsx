import "./form.css"

function Form() {
  return (
    <>
      <form className="form-container">
        <label>User Name</label>
        <input type="text" placeholder="Enter Your Name" />

        <label>Email</label>
        <input type="email" placeholder="Enter Your Email" />

        <label>Password</label>
        <input type="password" placeholder="Enter Your Password" />

        <label>Review</label>
        <textarea placeholder="Enter Your Review"></textarea>

        <label>Rating</label>

        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Form;
