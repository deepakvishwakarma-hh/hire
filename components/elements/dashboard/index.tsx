import Main from "./main";
import Aside from "./aside";
import { Grid } from "@chakra-ui/react";
import Loader from "../loader";

const Dashboard = ({ arr, data }: any) => {


    return (
        <Grid gridTemplate={'100vh / 100px auto'}>
            <Aside />
            {(data) ?
                <Main arr={arr} data={data} />
                : <Loader />}
        </Grid>
    )
};
export default Dashboard