import { Button, CardActions, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function TodoItem({todo,fetchInfoOfCurrentTodo}) {
  return <Card
  sx={{
    maxWidth:300,
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between"
  }}
  > 
    <CardContent>
        <Typography variant="h5" color={"text.secondary"}>{todo?.todo}</Typography>
    </CardContent>
    <CardActions>
      <Button onClick={() => fetchInfoOfCurrentTodo(todo?.id)} size="small">Show More</Button>
    </CardActions>
  </Card>;
}

export default TodoItem;
