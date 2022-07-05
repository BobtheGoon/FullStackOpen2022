import { useState } from 'react'

const Button = (props) => {
  return(
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ];
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([]);


  if (votes.length === 0) {
    const initialVotes = Array(anecdotes.length).fill(0);
    setVotes(initialVotes);
  }

  const voteAnecdote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  }

  const updateAnecdote = () => {
    const max = anecdotes.length
    const choice = Math.floor(Math.random() * max);
    setSelected(choice);
  }

  const getMostVoted = () => {
    if (!votes.some(item => item !== 0)) {
      return (
        <div>No votes given yet</div>
        )
    };

    const mostVoted = Math.max(...votes);
    const indexOfMostVoted = votes.indexOf(mostVoted);

    return (
      <div>
        <div>{anecdotes[indexOfMostVoted]}</div>
        <div>{votes[indexOfMostVoted]}</div>
      </div>
    );
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button handleClick={updateAnecdote} text={'next anecdote'}/>
      <Button handleClick={voteAnecdote} text={'vote'}/>
      <h1>Anecdote with most votes</h1>
      <div>{getMostVoted()}</div>
    </div>
  )
}

export default App;
