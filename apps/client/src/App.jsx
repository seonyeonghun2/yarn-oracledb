import React from 'react'

const App = () => {
  return (
    <div>
      <form action="">
        <fieldset>
          <div><label htmlFor="description">할일</label></div>
          <input type="text" name="description" id='description' />
          <div>완료여부</div>
          <label htmlFor="completed">완료</label><input type="radio" value="1" name="done" id="completed" checked />
          <label htmlFor="incompleted">미완료</label><input type="radio" value="0" name="done" id="incompleted" />
          <input type="submit" />
        </fieldset>
      </form>
    </div>
  )
}

export default App