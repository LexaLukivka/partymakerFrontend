import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Button from '@material-ui/core/es/Button/Button'
import Grid from '@material-ui/core/es/Grid/Grid'
import PartiesCardDescription from './PartiesCardDescription'
import { Link } from 'react-router-dom'
import moment from 'moment'

const styles = theme => ({
  root: {
    marginBottom: 15,
    width: '100%',
    '@media only screen and (max-width: 320px)': {
      width: '95%',
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
    marginTop: -20,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  flex: {
    flexGrow: 1,
  },
  thumbnails: {
    borderRadius: 5,
    margin: '0 2px',
    width: 60,
    height: 60,
  },
  cardContent: {
    marginTop: 10,
    paddingTop: 0,
  },
})

const PartiesCard = ({ classes, party }) =>
  <Card className={classes.root}>
    <CardHeader
      avatar={<Avatar src={party.admin.avatar_url} />}
      action={<IconButton><MoreVertIcon /></IconButton>}
      title={party.admin.name}
      subheader={moment(party.updated_at).fromNow()}
    />
    <CardContent className={classes.cardContent}>
      <Grid container justify="space-around">
        {party.pictures.map((picture, index) =>
          <Avatar key={index} src={picture.url} className={classes.thumbnails} />)}
      </Grid>
      <PartiesCardDescription
        maxCount={party.people_max}
        amount="100"
        address={party.address}
        description={party.description}
      />
    </CardContent>
    <CardActions className={classes.actions} disableActionSpacing>
      <div className={classes.flex}>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
      </div>
      <Link to={`/parties/${party.id}`}><Button color="primary">Подробнее</Button></Link>
    </CardActions>
  </Card>

PartiesCard.propTypes = {
  classes: object.isRequired,
  party: object.isRequired,
}

export default withStyles(styles)(PartiesCard)
