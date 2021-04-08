"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBoday = exports.getHeaders = void 0;

const getHeaders = () => ({
  "accept": "application/json",
  "accept-language": "en-US,en;q=0.9,zh-TW;q=0.8,zh;q=0.7,zh-CN;q=0.6",
  "cache-control": "no-cache",
  "content-type": "application/json",
  "pragma": "no-cache",
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "x-distil-ajax": "xebztatfusvxtdxdzzerd" // "cookie": "pe=p1; acctdel_v1=on; adh_new_ps=on; adh_ps_pickup=on; adh_ps_refill=on; buynow=off; sab_displayads=on; dashboard_v1=off; db-show-allrx=on; disable-app-dynamics=on; disable-sac=on; dpp_cdc=off; dpp_drug_dir=off; dpp_sft=off; getcust_elastic=on; echomeln6=off-p0; enable_imz=on; enable_imz_cvd=on; enable_imz_reschedule_instore=off; enable_imz_reschedule_clinic=off; flipp2=on; gbi_cvs_coupons=true; ice-phr-offer=off; v3redirecton=false; mc_cloud_service=on; mc_hl7=on; mc_home_new=off1; mc_ui_ssr=off-p2; mc_videovisit=on; memberlite=on; pauth_v1=on; pivotal_forgot_password=off-p0; pivotal_sso=off-p0; pbmplaceorder=off; pbmrxhistory=on; ps=on; refill_chkbox_remove=off-p0; rxdanshownba=off; rxdfixie=on; rxd_bnr=on; rxd_dot_bnr=on; rxdpromo=on; rxduan=on; rxlite=on; rxlitelob=off; rxm=on; rxm_phone_dob=off-p1; rxm_demo_hide_LN=off; rxm_phdob_hide_LN=on; rxm_rx_challenge=on; s2c_akamaidigitizecoupon=on; s2c_beautyclub=off-p0; s2c_digitizecoupon=on; s2c_dmenrollment=off-p0; s2c_herotimer=off-p0; s2c_newcard=off-p0; s2c_papercoupon=on; s2c_persistEcCookie=on; s2c_smsenrollment=on; s2cHero_lean6=on; sft_mfr_new=on; sftg=on; show_exception_status=on; v2-dash-redirection=on; _group1=quantum; mt.v=2.1355415019.1615648935339; AMCVS_06660D1556E030D17F000101%40AdobeOrg=1; s_cc=true; _gcl_au=1.1.1985991379.1615648937; QuantumMetricUserID=682f5e63927dc446b40ca2a8d79c997d; gbi_visitorId=ckm7vnudk00013g9erkhs1w2a; _4c_mc_=9017ff2a-e451-48bc-8bd5-b41f70ee0d8d; mt.cem=210201-Rx-Immunization-COVIDvax - A-Iteration; CVPF=3xdtnNl6XuWUgof-xE2yOZAolrOJhM9o9lM-sOKZbwLFkcQqwm5f6Yg; s_cmp=coronavirus-lp-vaccine-sd-statetool; s2c_rewardstrackerbctile=on; s2c_rewardstrackerbctenpercent=on; s2c_rewardstrackerqebtile=on; ak_bmsc=F4F2870ECEB52023FE44860B1F10673317C5330F9028000048815560D1C3F560~pl2czW+obVm80BFDueB0gHBEieCZOrEgGoydNf3SideYF3zOdeIIg9MjStwFt9V6liNl3B+oGrNh0DVrZYD+Xk245YNCAemQII2qiS0VpT7MQ/oRxOR+7fzADjYw9VbCBsjB6IKxvYHbAhISlDuEJdIiDk+VibsJEFfpWS02j3UI4mCJbW1n+kpKM/RrQ171qDlqRDllfA3lw92rvskygqtkJtG2PoSTNgtpHy3ipJAMk=; bm_sz=F87AF1EABFB5EA740CBC024CB191C2B4~YAAQDzPFF9q0Bjh4AQAAzAIBTgt6Rm4ygaEFiefxMka0rdg7DiG9zbeNpkUNh23+ZNiyy3Jao4BMG3KA5sv8v92Z9KA7c1OeZR1MCdQ/hVdBKGzx0XknNTZdl3qHvM6jqYeEvbILM4mBN9sQaJPsKTijCtzyNvAt3CwfAv3RYkrYHQZY21MrezqVtowm; DG_IID=D0524C93-42D1-3674-8B9A-25F37EC63BFC; DG_UID=98B7B2F2-2863-3A36-AC88-2D6883726B97; DG_ZID=0BF4F414-308B-3DAC-93A2-AFF97EF1E8BB; DG_ZUID=E5F6C05A-6387-3F15-977B-1A9B8551BD8C; DG_HID=CD0847CB-A962-3F2B-BE92-3674BE958609; DG_SID=76.103.177.170:131Cy6xMoGT3CZ4K1nQza4gr81RDmi5805xMNWzr9tU; AMCV_06660D1556E030D17F000101%40AdobeOrg=-330454231%7CMCIDTS%7C18707%7CMCMID%7C74777202458046901050932077935249622197%7CMCAAMLH-1616821193%7C9%7CMCAAMB-1616821193%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1616223593s%7CNONE%7CMCSYNCSOP%7C411-18714%7CMCAID%7CNONE%7CvVersion%7C3.1.2; mt.sc=%7B%22i%22%3A1616219562270%2C%22d%22%3A%5B%5D%7D; QuantumMetricSessionID=d0a3d5d0a21e6af8297d3967e2e2b8a5; gbi_sessionId=ckmhbena600003g9etq1pjiro; akavpau_vp_www_cvs_com_vaccine=1616220181~id=7e3d519a90926ab44a50135b4e701834; akavpau_vp_www_cvs_com_vaccine_covid19=1616220181~id=7e3d519a90926ab44a50135b4e701834; akavpau_www_cvs_com_general=1616220001~id=cda94447a296a3029727e819ff5f9c29; s_sq=%5B%5BB%5D%5D; gpv_e5=cvs%7Cdweb%7Cvaccine%7Cintake%7Cstore%7Ccvd-store-select%7Crx%3A%20immunizations%3A%20first%20dose%20scheduler; gpv_p10=www.cvs.com%2Fvaccine%2Fintake%2Fstore%2Fcvd-store-select%2Ffirst-dose-select; mt.mbsh=%7B%22fs%22%3A1616219610311%2C%22sf%22%3A1%2C%22lf%22%3A1616219610315%7D; bm_sv=4B2369D41E3A322B9ED1DF720DE4E9FD~EuON0TS3E9gDCmtLMyjjvrEnTd8Qzs3NJsAo5vlc02EMU1gq44XVsinn8bCmN6Rg0Aq/wWxoSF9CT2QYU8xEOxA50r2Phpe0W4KR5ujpFIDfNG8EFmD543jvt70GTvl4uoBr1/XAm7/uMZ3JG/dwqA==; _abck=EE2E0C6A4B1506304D2D6DBB4EB831B0~0~YAAQ1DLFF+RumEZ4AQAAIE8yTgXSibr6kljth6RD6CZ4oXeTFKvM2xiyQy3i8T24S9pS4/pKjQGlBj3T8QiZiqnEceFVtjaEvx5tQgCMe+a1pKSDlNWtvf8bjHOhFqbRNHPda8TYV9BfoSj7UUKPubVCV0q8P6aHyfSm/DFumXtzv9bGp8Nr51yUf/FImLd/1gT1dkEuoY8wk5W7DayFLdTJ0M8Do+zfxUoRUZlqhXzabVW2S7lUtgGbbWPQZNjC8Lz3VCQmU5X/WB14xqvgtsxbhg7ANfRSf+FsnVm4Jw1/c8k2MvfYSK9BIeLGUp+ja7UILAstAQarVfuVb5JJGBCpzBarmjriG36TrN6jPh2167zqHQgrl84sznssaiGzSxQUocXTtBHp3SbWuzSeMklfHg9k~-1~-1~-1; RT=\"z=1&dm=cvs.com&si=6c43abf5-a512-457d-9d2e-7cb8b14f4d92&ss=kmhbeax2&sl=9&tt=3r2&bcn=%2F%2Fb855d7f6.akstat.io%2F\"; qmexp=1616222023782; utag_main=v_id:01782c2e4d93008170bc0f6aec080307800320700093c$_sn:5$_ss:0$_st:1616222023805$vapi_domain:cvs.com$_pn:3%3Bexp-session$ses_id:1616219562247%3Bexp-session"

});

exports.getHeaders = getHeaders;

const getBoday = zipcode => JSON.stringify({
  "requestMetaData": {
    "appName": "CVS_WEB",
    "lineOfBusiness": "RETAIL",
    "channelName": "WEB",
    "deviceType": "DESKTOP",
    "deviceToken": "7777",
    "apiKey": "a2ff75c6-2da7-4299-929d-d670d827ab4a",
    "source": "ICE_WEB",
    "securityType": "apiKey",
    "responseFormat": "JSON",
    "type": "cn-dep"
  },
  "requestPayloadData": {
    "selectedImmunization": ["CVD"],
    "distanceInMiles": 35,
    "imzData": [{
      "imzType": "CVD",
      "ndc": ["59267100002", "59267100003", "59676058015", "80777027399"],
      "allocationType": "1"
    }],
    "searchCriteria": {
      "addressLine": zipcode
    }
  }
});

exports.getBoday = getBoday;