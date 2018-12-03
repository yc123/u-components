npm run dev-build

rm -rf ../usoft-mall-dist

mkdir ../usoft-mall-dist

cp -r dist/ ../usoft-mall-dist

scp -r ../usoft-mall-dist ytbjdocker.mallvue:~/

now=`date +%Y%m%d%H%M`

ssh -tt ytbjdocker.mallvue << pub
    #备份
    echo $now
    sudo cp -r /data/usoft-mall-dist/dist /data/usoft-mall-dist/dist-backup-$now
    sudo cp -r ~/usoft-mall-dist/dist /data/usoft-mall-dist
    sudo systemctl restart mall && sudo systemctl status mall -l
    exit
pub
