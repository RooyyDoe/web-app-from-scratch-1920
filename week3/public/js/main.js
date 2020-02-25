import * as routeHandler from './modules/RouteHandler.js'
import './modules/lib/routie.js'

routie({
    // Genre overview
    '': routeHandler.genreOverview,
    // Games overview
    ':genre': routeHandler.gamesOverview,
    // Game detail page
    '/:name': routeHandler.gameDetails
})