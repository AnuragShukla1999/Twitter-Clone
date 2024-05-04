import express from 'express';
import isAuthenticated from '../config/auth';
import { createTweet, deleteTweet, getAllTweets, getFollowingTweets, likeOrDislike } from '../controllers/tweetController';



const router = express.Router();

router.route("/create").post(isAuthenticated, createTweet);
router.route("/delete/:id").post(isAuthenticated, deleteTweet);
router.route("/like/:id").put(isAuthenticated, likeOrDislike);
router.route("/alltweets/:id").get(isAuthenticated, getAllTweets);
router.route("/followingtweets/:id").get(isAuthenticated, getFollowingTweets);


export default router;