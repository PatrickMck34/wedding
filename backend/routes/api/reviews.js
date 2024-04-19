const express = require('express')
const { Reviews, Spot, User, ReviewImages } = require('../../db/models');
const router = express.Router();
const { setTokenCookie, restoreUser } = require('../../utils/auth');

db = require('../../config/database')

router.get('/current', restoreUser, async (req, res) => {
    const userId = User.currentUserId(req, res)

    let Review = await Reviews.scope("liveScope").findAll({
        where: {
            id: userId
        },
        include: [{
            model: User.scope('userOwner')
        },
        {
            model: Spot.scope("reviewScope")
        },
        {
            model: ReviewImages.scope("defaultScope"),

        }


        ],
    })


    if (Review) {
        const Reviews = Review
        return res.json({ Reviews })
    }



}),


    router.post('/:reviewId/images', restoreUser, async (req, res) => {
        const reviewId = req.params.reviewId
        let { url } = req.body
        if (reviewId > 300) {
            return res.status(404).json({ message: "Review couldn't be found", statusCode: 404 })
        }
        const image = await ReviewImages.create({ reviewId, url })
        await image.save()
        id = image.id
        url = image.url
        result = { reviewId, id, url }
        return res.status(200).json(result)

    })
router.delete('/:reviewId', restoreUser, async (req, res) => {
    const userId = User.currentUserId(req, res)
    const reviewId = req.params.reviewId
    const spotCheck = await Reviews.findByPk(reviewId)
    if (spotCheck === null) {
        return res.status(404).json({ message: "Unable to find Review", statusCode: 404 })
    }
    const delReview = Reviews.destroy({
        where: {
            id: reviewId,
            userId: userId
        }
    })
    return res.status(200).json({ message: 'Sucessfully deleted', statusCode: 200 })
}),

    router.put(
        '/:reviewId', async (req, res) => {
            const spot = req.params.reviewId
            const { review } = req.body

            let spots = await Reviews.findByPk(spot)
            if (spots === null) {
                return res.status(404).send({ message: "Review couldn't be found", statusCode: 404 })
            }
            await spots.update({ review: review })
            await spots.save()
            spots.review = review


            const result = await Reviews.scope("liveScope").findByPk(spot)


            return res.json(
                result
            )
        })

module.exports = router;