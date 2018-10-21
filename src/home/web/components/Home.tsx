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
import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import classnames from 'classnames';
import image from './iron-image-small.jpg';
/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 * */
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
        super(props)
    }
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState((state: any) => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;
        const cardImage = 'https://cdn.shopify.com/s/files/1/1519/8910/products/PS_Dice_PocketDeveloper-3.jpg?v=1527332549'; 
        const jar = ["1", "2", "3"];

        return (
            <div key={"card-el"}>
                <Grid container={true} alignItems={"center"}>
                    <Grid item={true} sm={2} />
                    <Grid item={true} xs={12} sm={8}>
                        <div key={1}>
                            {jar.map((e: any, index: any) => {
                                return (
                                    <div key={index + e + '-key-$'}>
                                        <Card className={classes.card} key={index+1}>
                                            <CardHeader
                                                avatar={
                                                    <Avatar aria-label="Recipe" className={classes.avatar}>
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
                                                image={'../../../../assets/imagecard.jpg'}
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography component="p">
                                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
                                            </CardContent>
                                            <CardActions className={classes.actions} disableActionSpacing>
                                                <IconButton aria-label="Add to favorites">
                                                    <FavoriteIcon />
                                                </IconButton>
                                                <IconButton aria-label="Share">
                                                    <ShareIcon />
                                                </IconButton>
                                                <IconButton
                                                    className={classnames(classes.expand, {
                                                        [classes.expandOpen]: this.state.expanded,
                                                    })}
                                                    onClick={this.handleExpandClick}
                                                    aria-expanded={this.state.expanded}
                                                    aria-label="Show more"
                                                >
                                                    <ExpandMoreIcon />
                                                </IconButton>
                                            </CardActions>
                                            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                                                <CardContent>
                                                    <Typography paragraph>Method:</Typography>
                                                    <Typography paragraph>
                                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                                        minutes.
            </Typography>
                                                    <Typography paragraph>
                                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                                                        chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                                                        salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                                                        minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
                                                    <Typography paragraph>
                                                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat
                                                        to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and
                                                        cook again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                                        minutes more. (Discard any mussels that don’t open.)
            </Typography>
                                                    <Typography>
                                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
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
    public constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <section>
                    <SingleLineGridList {...this.props} />
                </section>
                <section>
                    <ListFeed {...this.props} />
                </section>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Home);
