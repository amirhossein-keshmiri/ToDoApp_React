import { Card, CardContent, Typography } from "@mui/material";

export default function ToDoItem({ todoItems }) {
    return (
        <Card>
            <CardContent>
                <Typography>
                    {todoItems.todo}
                </Typography>
            </CardContent>
        </Card>
    )
}