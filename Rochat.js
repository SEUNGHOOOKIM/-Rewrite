/******************************


[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/SEUBGHOOOKIM/Rewrite/main/Rochat.js

[mitm] 

hostname = api.revenuecat.com

*******************************/

var rochat ={
  "request_date_ms" : 1695832045768,
  "request_date" : "2023-09-27T16:27:25Z",
  "subscriber" : {
    "last_seen" : "2023-09-27T16:22:51Z",
    "first_seen" : "2023-09-27T16:22:51Z",
    "original_application_version" : "1",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "LifetimeMembership" : {
        "store_transaction_id" : "470001663439451",
        "expires_date" : "2100-01-01T12:00:13Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "unsubscribe_detected_at" : null,
        "auto_resume_date" : null,
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "purchase_date" : "2023-09-27T16:23:43Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "original_purchase_date" : "2023-09-27T16:23:44Z"
      }
    },
    "entitlements" : {
      "LifetimePro" : {
        "expires_date" : "2100-01-01T12:00:13Z",
        "purchase_date" : "2023-09-27T16:23:43Z",
        "product_identifier" : "LifetimeMembership",
        "grace_period_expires_date" : null
      },
      "Pro" : {
        "expires_date" : "2100-01-01T12:00:13Z",
        "purchase_date" : "2023-09-27T16:23:43Z",
        "product_identifier" : "LifetimeMembership",
        "grace_period_expires_date" : null
      }
    },
    "original_purchase_date" : "2023-09-27T16:21:48Z",
    "original_app_user_id" : "$RCAnonymousID:b16f94b12cb340b4a54fa5d04e194f83",
    "non_subscriptions" : {

    }
  }
};
$done({
        body: JSON.stringify(rochat)
    })
