import { Card, CardContent, Typography } from "@mui/material";

export default function ToDoItem({ todoItems }) {
    return (
        <Card>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>
                    {todoItems.todo}
                </Typography>
            </CardContent>
        </Card>
    )
}