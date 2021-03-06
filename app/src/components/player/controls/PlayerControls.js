import './playerControls.scss';
import React from 'react';
import ProgressBar from './progress_bar/ProgressBar';
import PlayButton from './play_button/PlayButton';
// import PauseButton from './pause_button/PauseButton';
import SkipButton from './skip_button/SkipButton';

const PlayerControls = ({ seek, isPlaying }) => {
    return (
        <div className="player-controls-container">
            <div className="player-controls">
                <SkipButton isRewind={true} />
                <PlayButton />
                {/* <PauseButton /> */}
                <SkipButton />
            </div>
            <div className="player-progress-bar">
                <ProgressBar seek={seek} />
            </div>
            <div className="player-progress">25:50</div>
        </div>
    );
};

export default PlayerControls;
