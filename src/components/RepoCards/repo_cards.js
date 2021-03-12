import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import '../RepoCards/repo_cards.css'

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
}));

export default function RepoCards({ repo }){
    const classes = useStyles();
    
    return (
        <div className="background">
            <Card className="repo-card">
                <CardHeader title={repo.name}></CardHeader>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {repo.description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {repo.language}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

