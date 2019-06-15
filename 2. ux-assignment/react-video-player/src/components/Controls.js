import React from "react";

export default function Controls() {
    return (
        <div id='controls'>
                <div class="buttons">
                    <button type="button" class="btn btn-default btn-xs play">
                        <span class="glyphicon glyphicon-play"></span>
                    </button>
                    <button type="button" class="btn btn-default btn-xs pause">
                        <span class="glyphicon glyphicon-pause"></span>
                    </button>
                    <button type="button" class="btn btn-default btn-xs reset">
                        <span class="glyphicon glyphicon-repeat"></span>
                    </button>
                    <button type="button" class="btn btn-default btn-xs plus">
                        <span class="glyphicon glyphicon-plus"></span>
                    </button>
                    <button type="button" class="btn btn-default btn-xs minus">
                        <span class="glyphicon glyphicon-minus"></span>
                    </button>
                    <button type="button" class="btn btn-default btn-xs mute">
                        <span class="glyphicon glyphicon-headphones"></span>
                    </button>
                    <button type="button" class="btn btn-success btn-xs thumbsUp">
                        <span class="glyphicon glyphicon-thumbs-up"></span>
                    </button>
                    <span id="likesCount">0</span>
                    <button type="button" class="btn btn-danger btn-xs thumbsDown">
                        <span class="glyphicon glyphicon-thumbs-down"></span>
                    </button>
                    <span id="dislikesCount">0</span>
                </div>
                <div>
                    <progress id='progress-bar' min='0' max='100' value='30'>0% played</progress>
                </div>
            </div>
    );
}
