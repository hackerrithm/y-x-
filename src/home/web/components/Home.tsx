import * as React from "react";
import * as styles from "../ui/Home";
import withStyles from "@material-ui/core/styles/withStyles";
import {
    GridList,
    GridListTile,
    GridListTileBar,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    CardHeader,
    Collapse
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import classnames from "classnames";
import { log } from "util";

const tileData = [
    {
        img: "https://www.wissenschaft-aktuell.de/onTEAM/fotos/221368551775.jpg",
        title: "Image0",
        author: "author"
    },
    {
        img: "https://www.wissenschaft-aktuell.de/onTEAM/fotos/221368551775.jpg",
        title: "Image1",
        author: "author"
    },
    {
        img: "https://www.wissenschaft-aktuell.de/onTEAM/fotos/221368551775.jpg",
        title: "Image2",
        author: "author"
    },
    {
        img: "https://www.wissenschaft-aktuell.de/onTEAM/fotos/221368551775.jpg",
        title: "Image3",
        author: "author"
    },
    {
        img: "https://www.wissenschaft-aktuell.de/onTEAM/fotos/221368551775.jpg",
        title: "Image4",
        author: "author"
    },
    {
        img: "https://www.wissenschaft-aktuell.de/onTEAM/fotos/221368551775.jpg",
        title: "Image5",
        author: "author"
    }
];

function SingleLineGridList(props: any) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container={true} alignItems={"center"}>
                <Grid item={true} sm={2} />
                <Grid item={true} xs={12} sm={8}>
                    <section>
                        <GridList className={classes.gridList} cols={6.0}>
                            {tileData.map((tile: any, index: any) => (
                                <GridListTile key={index}>
                                    <img src={tile.img} alt={tile.title} />
                                    <GridListTileBar
                                        title={tile.title}
                                        classes={{
                                            root: classes.titleBar,
                                            title: classes.title
                                        }}
                                        actionIcon={
                                            <IconButton>
                                                <StarBorderIcon className={classes.title} />
                                            </IconButton>
                                        }
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </section>
                </Grid>
                <Grid item={true} sm={2} />
            </Grid>
        </div>
    );
}
class ListFeed extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = { expanded: false };
    }

    public handleExpandClick = () => {
        this.setState((state: any) => ({ expanded: !state.expanded }));
    };

    public render() {
        const { classes } = this.props;
        const jar = ["1", "2", "3"];

        return (
            <div key={"card-el"}>
                <Grid container={true} alignItems={"center"}>
                    <Grid item={true} sm={2} />
                    <Grid item={true} xs={12} sm={8}>
                        <div key={1}>
                            {jar.map((e: any, index: any) => {
                                return (
                                    <div key={index + e + "-key-$"}>
                                        <Card className={classes.card} key={index + 1}>
                                            <CardHeader
                                                avatar={
                                                    <Avatar
                                                        aria-label="Recipe"
                                                        className={classes.avatar}
                                                    >
                                                        R
                          </Avatar>
                                                }
                                                action={
                                                    <IconButton>
                                                        <MoreVertIcon />
                                                    </IconButton>
                                                }
                                                title="Shrimp and Chorizo Paella"
                                                subheader="September 14, 2016"
                                            />
                                            <CardMedia
                                                className={classes.media}
                                                image={
                                                    "https://www.wissenschaft-aktuell.de/onTEAM/fotos/221368551775.jpg"
                                                }
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography component="p">
                                                    This impressive paella is a perfect party dish and a
                                                    fun meal to cook together with your guests. Add 1 cup
                                                    of frozen peas along with the mussels, if you like.
                        </Typography>
                                            </CardContent>
                                            <CardActions
                                                className={classes.actions}
                                                disableActionSpacing={true}
                                            >
                                                <IconButton aria-label="Add to favorites">
                                                    <FavoriteIcon />
                                                </IconButton>
                                                <IconButton aria-label="Share">
                                                    <ShareIcon />
                                                </IconButton>
                                                <IconButton
                                                    className={classnames(classes.expand, {
                                                        [classes.expandOpen]: this.state.expanded
                                                    })}
                                                    onClick={this.handleExpandClick}
                                                    aria-expanded={this.state.expanded}
                                                    aria-label="Show more"
                                                >
                                                    <ExpandMoreIcon />
                                                </IconButton>
                                            </CardActions>
                                            <Collapse
                                                in={this.state.expanded}
                                                timeout="auto"
                                                unmountOnExit={true}
                                            >
                                                <CardContent>
                                                    <Typography paragraph={true}>Method:</Typography>
                                                    <Typography paragraph={true}>
                                                        Heat 1/2 cup of the broth in a pot until simmering,
                                                        add saffron and set aside for 10 minutes.
                          </Typography>
                                                    <Typography paragraph={true}>
                                                        Heat oil in a (14- to 16-inch) paella pan or a
                                                        large, deep skillet over medium-high heat. Add
                                                        chicken, shrimp and chorizo, and cook, stirring
                                                        occasionally until lightly browned, 6 to 8 minutes.
                                                        Transfer shrimp to a large plate and set aside,
                                                        leaving chicken and chorizo in the pan. Add
                                                        pimentón, bay leaves, garlic, tomatoes, onion, salt
                                                        and pepper, and cook, stirring often until thickened
                                                        and fragrant, about 10 minutes. Add saffron broth
                                                        and remaining 4 1/2 cups chicken broth; bring to a
                                                        boil.
                          </Typography>
                                                    <Typography paragraph={true}>
                                                        Add rice and stir very gently to distribute. Top
                                                        with artichokes and peppers, and cook without
                                                        stirring, until most of the liquid is absorbed, 15
                                                        to 18 minutes. Reduce heat to medium-low, add
                                                        reserved shrimp and mussels, tucking them down into
                                                        the rice, and cook again without stirring, until
                                                        mussels have opened and rice is just tender, 5 to 7
                                                        minutes more. (Discard any mussels that don’t open.)
                          </Typography>
                                                    <Typography>
                                                        Set aside off of the heat to let rest for 10
                                                        minutes, and then serve.
                          </Typography>
                                                </CardContent>
                                            </Collapse>
                                        </Card>
                                    </div>
                                );
                            })}
                        </div>
                    </Grid>
                    <Grid item={true} sm={2} />
                </Grid>
            </div>
        );
    }
}

class Home extends React.Component<any, any> {
    public retrievedObject: any;
    public constructor(props: any) {
        super(props);

        this.state = {
            userVal: ""
        };
    }

    public generateElement = (key: any, value: any) => {
        return (
            <div key={key} className="row">
                <div className="col-xs-6 ins-label">{key}</div>
                <div className="col-xs-6">{value}</div>
            </div>
        );
    };

    public generateData = (data: any) => {
        const newData = Object.keys(data).reduce((result: any, currentKey: any) => {
            if (
                typeof data[currentKey] === "string" ||
                data[currentKey] instanceof String
            ) {
                const elementToPush = this.generateElement(
                    currentKey,
                    data[currentKey]
                );
                result.push(elementToPush);
            } else {
                const nested = this.generateData(data[currentKey]);
                result.push(...nested);
            }
            return result;
        }, []);
        return newData;
    };

    public async componentDidMount() {
        this.retrievedObject = await localStorage.getItem("user");

        log("retrievedObject: " + JSON.stringify(this.retrievedObject, null, 4));

        this.setState({ userVal: this.retrievedObject });
    }

    public render() {
        const { classes } = this.props;
        return (
            <div>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer}>
                        <section>
                            <SingleLineGridList {...this.props} />
                            {/* <pre>this: {this.generateData(this.state.userVal)}</pre> */}
                        </section>
                        <section>
                            <ListFeed {...this.props} />
                        </section>
                    </div>
                </main>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Home);
