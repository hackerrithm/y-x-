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
        // CardHeader,
        // Collapse,
        Button,
        CardActionArea
        //     TextField
} from "@material-ui/core";
// import Avatar from "@material-ui/core/Avatar";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
// import classnames from "classnames";
import { log } from "util";
import * as classNames from "classnames";
import "../ui/stylesheets/home.css";
// import { Field } from "redux-form";

import axios from "axios";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
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

                this.state = { expanded: false, imgSrc: "" };
        }

        public componentDidMount() {
                this.setState({
                        imgSrc:
                                "https://memestatic.fjcdn.com/large/pictures/df/f0/dff066_6440048.jpg"
                });
        }

        public handleExpandClick = () => {
                this.setState((state: any) => ({ expanded: !state.expanded }));
        };

        public render() {
                const { classes } = this.props;
                const { imgSrc } = this.state;
                // const jar = ["1", "2", "3"];

                return (
                        <div key={"card-el"}>
                                <Grid container={true} alignItems={"center"}>
                                        {
                                                // awesome content
                                        }
                                        <Grid item={true} sm={2} />
                                        <Grid item={true} sm={8}>
                                                <div className={classes.heroUnit}>
                                                        <div className={classes.heroContent}>
                                                                <Typography
                                                                        component="h1"
                                                                        variant="h2"
                                                                        align="center"
                                                                        color="textPrimary"
                                                                        gutterBottom={true}
                                                                >
                                                                       Photos List
                </Typography>
                                                                <Typography
                                                                        variant="h6"
                                                                        align="center"
                                                                        color="textSecondary"
                                                                        paragraph={true}
                                                                >
                                                                       blah blah.


                </Typography>
                                                                <div className={classes.heroButtons}>
                                                                        <Grid container={true} spacing={16} justify="center">
                                                                                <Grid item={true}>
                                                                                        <Button variant="contained" color="primary">
                                                                                                Main call to action
                      </Button>
                                                                                </Grid>
                                                                                <Grid item={true}>
                                                                                        <Button variant="outlined" color="primary">
                                                                                                Secondary action
                      </Button>
                                                                                </Grid>
                                                                        </Grid>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className={classNames(classes.layout, classes.cardGrid)}>
                                                        <Grid container={true}>
                                                                {cards.map((card: any, index: number) => (
                                                                        <Card className={classes.card} key={index}>
                                                                                <CardActionArea>
                                                                                        <CardMedia
                                                                                                className={classes.media}
                                                                                                image={process.env.PUBLIC_URL + 'da39a3ee5e6b4b0d3255bfef95601890afd80709500c0bed7c0052fed792b69b.jpg'}
                                                                                                title="Contemplative Reptile"
                                                                                                style={{ height: 600 }}
                                                                                        />
                                                                                        <CardContent>
                                                                                                <Typography
                                                                                                        gutterBottom={true}
                                                                                                        variant="h5"
                                                                                                        component="h2"
                                                                                                >
                                                                                                        Lizard
                        </Typography>
                                                                                                <Typography component="p">
                                                                                                        Lizards are a widespread group of squamate reptiles,
                                                                                                        with over 6,000 species, ranging across all continents
                                                                                                        except Antarctica
                        </Typography>
                                                                                        </CardContent>
                                                                                </CardActionArea>
                                                                                <CardActions>
                                                                                        <Button size="small" color="primary">
                                                                                                Share
                      </Button>
                                                                                        <Button size="small" color="primary">
                                                                                                Learn More
                      </Button>
                                                                                </CardActions>
                                                                        </Card>
                                                                ))}
                                                        </Grid>
                                                </div>
                                        </Grid>
                                        <Grid item={true} sm={2} />
                                </Grid>
                        </div>
                );
        }
}

class Post extends React.Component<any, any> {
        constructor(props: any) {
                super(props);
                this.state = { file: "", imagePreviewUrl: "" };
        }

        async _handleSubmit(e: any) {
                e.preventDefault();
                // TODO: do something with -> this.state.file
                log("handle uploading-" + this.state.file);

                JSON.stringify( this.state.file, null, 4);

                let formData = new FormData();

                formData.append('contentPhoto', this.state.file);

                return await axios.post(
                        `http://localhost:7003/auth/post/add`,
                        formData
                ).then((res: any) => {
                        res.json();
                }).catch((e: any) => {
                        log("error bya")
                });
        }

        _handleImageChange(e: any) {
                e.preventDefault();

                let reader = new FileReader();
                let file = e.target.files[0];

                reader.onloadend = () => {
                        this.setState({
                                file: file,
                                imagePreviewUrl: reader.result
                        });
                };
                reader.readAsDataURL(file);
        }

        public render() {
                let { imagePreviewUrl } = this.state;
                let $imagePreview = null;
                if (imagePreviewUrl) {
                        $imagePreview = <img src={imagePreviewUrl} />;
                } else {
                        $imagePreview = (
                                <div className="previewText">Please select an Image for Preview</div>
                        );
                }

                return (
                        <div className="previewComponent">
                                <form onSubmit={e => this._handleSubmit(e)}>
                                        <input
                                                className="fileInput"
                                                type="file"
                                                name="contentPhoto"
                                                onChange={(e: any) => { this._handleImageChange(e) } }
                                        />
                                        <button
                                                className="submitButton"
                                                type="submit"
                                                onClick={(e: any) => { this._handleSubmit(e) } }
                                        >
                                                Upload Image
          </button>
                                </form>
                                <div className="imgPreview">{$imagePreview}</div>
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
                                                        <Post {...this.props} />
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
