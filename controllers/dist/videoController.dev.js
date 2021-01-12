"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteVideo = exports.editVideo = exports.videoDetail = exports.upload = exports.videos = exports.search = exports.home = void 0;

var home = function home(req, res) {
  return res.send("Home");
};

exports.home = home;

var search = function search(req, res) {
  return res.send("search");
};

exports.search = search;

var videos = function videos(req, res) {
  return res.send("Videos");
};

exports.videos = videos;

var upload = function upload(req, res) {
  return res.send("Upload");
};

exports.upload = upload;

var videoDetail = function videoDetail(req, res) {
  return res.send("Video Detail");
};

exports.videoDetail = videoDetail;

var editVideo = function editVideo(req, res) {
  return res.send("Edit Video");
};

exports.editVideo = editVideo;

var deleteVideo = function deleteVideo(req, res) {
  return res.send("Delete Video");
};

exports.deleteVideo = deleteVideo;