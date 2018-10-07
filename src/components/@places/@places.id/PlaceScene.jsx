/* eslint-disable camelcase */
import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import Loading from 'components/Loading'
import NotFound from 'components/NotFound'
import connector from './connector'
import PlacePanel from './PlacePanel'
import isEmpty from 'lodash/isEmpty'
import PictureGrid from 'components/PictureGrid/PictureGrid'

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflowX: 'hidden',
    position: 'relative',
    background: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },

  placeContainer: {
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      minWidth: 500,
      flexBasis: '25%',
    },
  },
  pictureGridContainer: {
    flexGrow: 1,
    height: '100%',
    overflowY: 'auto',
  },
})

class PlaceScene extends React.Component {
  componentWillMount() {
    const { actions, match } = this.props
    this.openPlace(match.params.id)
    actions.header.back()
  }

  componentWillUnmount() {
    const { actions } = this.props
    this.props.actions.header.resetTitle()
    actions.header.menu()
  }

  openPlace = (place_id) => {
    const { actions, place } = this.props
    if (isEmpty(place)) {
      actions.place.load(place_id).then(() => {
        actions.place.open(place_id)
      })
    } else {
      actions.place.open(place_id)
    }
  }

  handleVote = rating => {
    const { actions } = this.props
    actions.place.vote(rating)
  }

  openModal = (picture_url) => {
    const { actions } = this.props
    actions.pictureModal.show(picture_url)
  }

  render() {
    const { classes, place } = this.props
    if (isEmpty(place)) return <Loading />
    if (place.error) return <NotFound />

    return (
      <div className={classes.root}>
        <div className={classes.placeContainer}>
          <PlacePanel
            place={place}
            onVote={this.handleVote}
            vote={4}
          />
        </div>
        <div className={classes.pictureGridContainer}>
          <PictureGrid pictures={place.pictures} onClick={this.openModal} />
        </div>
      </div>
    )
  }
}

PlaceScene.propTypes = {
  classes: object.isRequired,
  place: object.isRequired,
  actions: object.isRequired,
  match: object.isRequired,
}

export default withStyles(styles)(connector(PlaceScene))
