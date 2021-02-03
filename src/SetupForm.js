import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const {quiz, handleChange, handleSubmit, error} = useGlobalContext()
  return <main>
    <section className="quiz quiz-small">
      <form onSubmit={handleSubmit} className={'setup-form'}>
        <h2>setup quiz</h2>
        {/*amount*/}
        <div className="form-control">
          <label htmlFor="amount">number of questions</label>
          <input
              className={'form-input'}
              id={'amount'}
              value={quiz.amount}
              onChange={handleChange}
              name={'amount'}
              min={1}
              max={50}
              type="number"/>
        </div>
        <div className="form-control">
          {/*category*/}
          <label htmlFor="category">category</label>
          <select
              className={'form-input'}
              value={quiz.category}
              onChange={handleChange}
              name="category"
              id="category">
            <option value="sports">sports</option>
            <option value="history">history</option>
            <option value="politics">politics</option>
          </select>
        </div>
        <div className="form-control">
          {/*difficulty*/}
          <label htmlFor="difficulty">select difficulty</label>
          <select
              className={'form-input'}
              value={quiz.difficulty}
              onChange={handleChange}
              name="difficulty"
              id="difficulty">
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
        {error && <p className="error">can't generate questions, please try different options</p>}
        <button type="submit" onClick={handleSubmit} className={'submit-btn'}>start</button>
      </form>
    </section>
  </main>
}

export default SetupForm
