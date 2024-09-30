# package computerdatabase
# import io.gatling.core.Predef._
# import io.gatling.http.Predef._
# import io.gatling.core.structure.ScenarioBuilder
# import java.util.concurrent.ThreadLocalRandom
# import scala.concurrent.duration._

# class MySimulation extends Simulation {

#   // Define the HTTP protocol configuration
# val httpProtocol = http
#   .baseUrl("https://keellssuper--keellsqa.sandbox.my.salesforce.com/services/apexrest/loyalty/v1")
#   .acceptHeader("application/json")
#   .contentTypeHeader("application/json")

# val scn: ScenarioBuilder = scenario("My Scenario")
#   .exec(session => {
#     val randomValue = scala.util.Random.nextInt(10000) + 1
#     session.set("qq", randomValue)
#   })
#   .exec(
#     http("Post JSON Request")
#       .post("/order")
#       .header("Authorization", "Bearer 00DHy000000YsOV!AQEAQOFspitODX7ZLOL3SEYAFkbUIRmg1NVLlEaMMqfz75hFJrpOvCeR8YpBXkpEUzp8ho92HxkT5mGlmx1q3sxa6RMuNirv") // Use a secure way to handle tokens
#       .body(StringBody("""[{
#           "memberidentifier": "241593424493930",
#           "externalOrderId": "${qq}",
#           "changeMoneyToRedeem": null,
#           "nexusPointsToRedeem": null,
#           "changeMoneyToReward": 0,
#           "giftVoucherAmount": 0,
#           "salesforceVoucherAmount": 0,
#           "isGiftVoucherPurchase": false,
#           "countOfSustainableBags": 6,
#           "paidAmount": 230,
#           "totalAmount": 250,
#           "totalOrderPromotionalAmount": 0,
#           "totalProductPromotionalAmount": 0,
#           "invoiceNumber": "1244444aa,6",
#           "invoiceDate": "2024-09-09",
#           "outletCode": "O",
#           "posUser": "O",
#           "paymentMode": "Cash",
#           "previousTransactionJournalId": null,
#           "voucherCode": null,
#           "products": [
#               {
#                   "name": "Any1",
#                   "sku": "TESTPROD6",
#                   "salesPrice": 10,
#                   "quantity": 10,
#                   "totalpromotionalamount": 0
#               },
#               {
#                   "name": "Any2",
#                   "sku": "TESTPROD2",
#                   "salesPrice": 15,
#                   "quantity": 10,
#                   "totalpromotionalamount": 0
#               }
#           ]
#       }]""")).asJson
#       .check(status.is(200))
#   )

# setUp(
#   scn.inject(atOnceUsers(10000))
# ).protocols(httpProtocol)

# }
