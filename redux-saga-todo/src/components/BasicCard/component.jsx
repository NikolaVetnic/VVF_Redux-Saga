import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { useDispatch } from "react-redux";

export default function BasicCard(props) {
    const dispatch = useDispatch();

    const deleteHandler = (payload) => {
        dispatch({ type: "DELETE", key: props.content.key });
    };

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.content.date}
                </Typography>
                <Typography variant="body2">{props.content.msg}</Typography>
                <br></br>
                <Button variant="outlined" onClick={deleteHandler}>
                    Delete
                </Button>
            </CardContent>
        </Card>
    );
}
