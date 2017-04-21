ssh -T root@45.55.2.165 << EOF
    cd /root/howesfishing-server/api-server

    git reset --hard

    git checkout master

    git pull

    pm2 restart app
EOF