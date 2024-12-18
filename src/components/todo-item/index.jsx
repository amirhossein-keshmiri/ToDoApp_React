import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

export default function ToDoItem({ todoItems, fetchDetailsOfCurrentTodo }) {
    return (
        <Card>
            <CardContent sx={{
                maxWidth: 350,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}>
                <Typography variant="h5" color={"text.secindary"}>
                    {todoItems?.todo}
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                onClick={()=> fetchDetailsOfCurrentTodo(todoItems?.id)}
                sx={{
                    backgroundColor: '#000000',
                    color: '#fff',
                    opacity: '0.75',
                    '&:hover': {
                        backgroundColor: '#000000',
                        color: '#fff',
                        opacity: '1',
                    },
                }}>
                    show Details
                </Button>
            </CardActions>
        </Card>
    )
}