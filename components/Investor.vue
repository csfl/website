<template>
  <section id="investor" class="section">
    <div class="container">
      <h2 class="title section-title inview1 animated fadeInDown delay-0-800">
        {{$t('investor.title')}}
      </h2>
      <div class="columns is-multiline is-centered is-mobile">
        <div :key="item.key" v-for="(item, index) in list" class="column item">
          <a :href="item.url" target="_blank" @mouseover="onHover(index)" @mouseout="onOut(index)" :class="`key-${item.key}`">
            <div class="img-wrapper">
              <img v-show="index === hover" class="investor-logo" :src="item.logoActive" alt="">
              <img v-show="index !== hover" class="investor-logo" :src="item.logo" alt="">
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: 'investment',
      data () {
        return {
          hover: null,
          list: [
            {
              key: 'bitmain',
              logo: require('~/assets/images/investor/bitmain.png'),
              logoActive: require('~/assets/images/investor/bitmain-blue.png'),
              url: 'https://www.bitmain.com/'
            },
            {
              key: 'ok',
              logo: require('~/assets/images/investor/ok.png'),
              logoActive: require('~/assets/images/investor/ok-blue.png'),
              url: 'https://www.okex.com/pages/products/blockchain.html'
            },
            {
              key: 'starwinCapital',
              logo: require('~/assets/images/investor/starwin.png'),
              logoActive: require('~/assets/images/investor/starwin-blue.png'),
              url: 'https://www.tianyancha.com/organize/b5dfe14738'
            },
            {
              key: 'nodeCapital',
              logo: require('~/assets/images/investor/node.png'),
              logoActive: require('~/assets/images/investor/node-blue.png'),
              url: 'http://www.nodecap.com/'
            },
            {
              key: 'linkvc',
              logo: require('~/assets/images/investor/linkvc.png'),
              logoActive: require('~/assets/images/investor/linkvc-blue.png'),
              url: 'http://www.linkvc.com/'
            },
            {
              key: 'ld',
              logo: require('~/assets/images/investor/ld.png'),
              logoActive: require('~/assets/images/investor/ld-blue.png'),
              url: 'http://www.ldcap.com/'
            },
            {
              key: 'kosmos',
              logo: require('~/assets/images/investor/kosmos.png'),
              logoActive: require('~/assets/images/investor/kosmos-blue.png'),
              url: 'http://kosmos.capital/'
            },
            {
              key: 'genesisCapital',
              logo: require('~/assets/images/investor/genesis.png'),
              logoActive: require('~/assets/images/investor/genesis-blue.png'),
              url: 'http://www.newgenesiscap.com/'
            },
            {
              key: 'funcityCapital',
              logo: require('~/assets/images/investor/funcity.png'),
              logoActive: require('~/assets/images/investor/funcity-blue.png'),
              url: 'http://www.funcityholding.com/'
            },
            {
              key: 'bp',
              logo: require('~/assets/images/investor/bp.png'),
              logoActive: require('~/assets/images/investor/bp-blue.png'),
              url: 'http://byzantinepartners.com/'
            },
            {
              key: 'distributed-fund',
              logo: require('~/assets/images/investor/distributed-fund.png'),
              logoActive: require('~/assets/images/investor/distributed-fund-blue.png'),
              url: 'http://distributed.fund'
            },
            {
              key: 'helloCapital',
              logo: require('~/assets/images/investor/hello.png'),
              logoActive: require('~/assets/images/investor/hello-blue.png'),
              url: 'http://hellocapital.net/'
            },
            {
              key: 'zhizi',
              logo: require('~/assets/images/investor/zhizi.png'),
              logoActive: require('~/assets/images/investor/zhizi-blue.png')
            },
            {
              key: 'wanbu',
              logo: require('~/assets/images/investor/wanbu.png'),
              logoActive: require('~/assets/images/investor/wanbu-blue.png'),
              url: 'http://wandarin.org/'
            },
            {
              key: 'axi',
              logo: require('~/assets/images/investor/axi.png'),
              logoActive: require('~/assets/images/investor/axi-blue.png'),
              url: 'https://axi.vc/'
            },
            {
              key: 'bigcoin',
              logo: require('~/assets/images/investor/bigcoin.png'),
              logoActive: require('~/assets/images/investor/bigcoin-blue.png'),
              url: 'https://www.linkedin.com/company/bigcoin-capital/'
            },
            {
              key: 'hot',
              logo: require('~/assets/images/investor/hot.png'),
              logoActive: require('~/assets/images/investor/hot-blue.png')
            },
            {
              key: 'dazhi',
              logo: require('~/assets/images/investor/dazhi.png'),
              logoActive: require('~/assets/images/investor/dazhi-blue.png')
            },
            {
              key: 'handsome',
              logo: require('~/assets/images/investor/handsome.png'),
              logoActive: require('~/assets/images/investor/handsome-blue.png')
            },
            {
              key: 'hesheng',
              logo: require('~/assets/images/investor/hesheng.png'),
              logoActive: require('~/assets/images/investor/hesheng-blue.png')
            },
            {
              key: 'b100',
              logo: require('~/assets/images/investor/b100.png'),
              logoActive: require('~/assets/images/investor/b100-blue.png')
            },
            {
              key: 'bn',
              logo: require('~/assets/images/investor/bn.png'),
              logoActive: require('~/assets/images/investor/bn-blue.png')
            }
          ]
        }
      },
      methods: {
        onHover (index) {
          this.hover = index
        },
        onOut () {
          this.hover = null
        }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/vars";

  .section {
    @include touch {
      padding-top: 25px;
      padding-bottom: 25px;
      .title {
        font-size: 24px;
        line-height: 34px;
        margin-bottom: 30px;
      }
    }
  }

  .title {
    font-size:36px;
    font-family: $font-family-main;
    color:rgba(51,51,51,1);
    line-height:50px;
    text-align: center;
    @include desktop {
      margin-bottom: 3rem;
    }
  }

  .column {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .img-wrapper {
      flex-direction: row;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        cursor: pointer;
      }
      img {
        /*max-height: 180px;*/
        /*max-width: 180px;*/
      }
    }
  }

  .columns {
    flex-direction: row;
    margin:-15px -25px;
    .item {
      padding:10px;
      flex-grow: 0;
      & > a {
        display: flex;
        width: 120px;
        height: 120px;
        /*border: 1px dashed rgba(0,0,0,0.1);*/
        &:hover {
          border-color: $light-blue;
        }
        &.key-hot {
          padding: 20px;
        }
      }
    }
    @include touch {
      margin: -5px;
      .item {
        padding:5px;
        & > a {
          width: 95px;
          height: 95px;
        }
      }
    }

    @include mobile {
      margin: -5px;
      justify-content: space-evenly;
      .item {
        padding:5px;
        & > a {
          width: 70px;
          height: 70px;
        }
      }
    }
  }

</style>
