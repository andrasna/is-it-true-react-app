function Quiz() {
  return (
    <main>
      <p>Category: lorem ipsum</p>

      <p>Question 1 / 4</p>

      <p>
        The fourth funnel of the RMS Titanic was fake designed to make the ship
        look more powerful and symmetrical.
      </p>

      <div>
        <input type="radio" id="true" name="answer" value="true" />
        <label htmlFor="true">True</label>
      </div>

      <div>
        <input type="radio" id="false" name="answer" value="false" />
        <label htmlFor="false">False</label>
      </div>

      <button>Next</button>
    </main>
  )
}

export default Quiz
