import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from "./app/layouts/layout";
import MainPage from "./app/pages/Main";
import PageNotFound from "./app/pages/PageNotFound";
import Users from "./app/pages/Users";
import Use from "./app/pages/User";
import Post from "./app/pages/Post";
import Posts from "./app/pages/Posts";
import Comment from "./app/pages/Comment";
import Comments from "./app/pages/Comments";

import {Provider} from 'react-redux';
import store from './store';



ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Layout}>
				<IndexRoute component={MainPage}/>
				<Route path="posts" component={Posts}>
					<Route path=":postId" component={Post}/>
				</Route>
				<Route path="comments" component={Comments}>
					<Route path=":commentId" component={Comment}/>
				</Route>
				<Route path="users" component={Users}>
					<Route path=":userId" component={Use}/>
				</Route>
				<Route path="*" component={PageNotFound}/>
			</Route>
		</Router>
	</Provider>
	, document.getElementById("root"));