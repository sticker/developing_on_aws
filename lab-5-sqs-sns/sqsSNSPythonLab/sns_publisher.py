# Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights
# reserved.

import json
import utils
import solution
import boto3

# The SNSPublisher class publishes messages to SNS topics
EMAIL_SUBJECT = "Status of pharmaceuticals order."
EMAIL_MESSAGE = "Your pharmaceutical supplies will be shipped 5 business days from the date of order."
ORDER_DETAILS = "Ibuprofen, Acetaminophen"

# STUDENT TODO 1: Set ARN for SNS topic for email messages
TOPIC_ARN_EMAIL = "arn:aws:sns:ap-northeast-1:910072230172:EmailSNSTopic"

# STUDENT TODO 2: Set ARN for SNS topic for order messages
TOPIC_ARN_ORDER = "arn:aws:sns:ap-northeast-1:910072230172:OrderSNSTopic"


def publish_email_msg(
        topicArn=TOPIC_ARN_EMAIL,
        emailMesg=EMAIL_MESSAGE,
        emailSubj=EMAIL_SUBJECT):
    sns = boto3.resource('sns')
    publish_email(sns, topicArn, emailMesg, emailSubj)
    print("Email topic published")


def publish_order_msgs(topicArn=TOPIC_ARN_ORDER, orderDetails=ORDER_DETAILS):
    sns = boto3.resource('sns')
    for i in range(1, utils.NUM_MESSAGES + 1):
        orderDict = {
            'orderId': i,
            'orderDate': "2015/10/%d" % i,
            'orderDetails': orderDetails}
        porder = utils.Order(orderDict)
        print("Publishing order to SNS topic:", repr(porder))
        jsonStr = convert_order_to_json(porder)
        publish_order(sns, topicArn, jsonStr)
        print("Order topic published")


def publish_msgs():
    publish_email_msg()
    publish_order_msgs()


def publish_email(sns, topic_arn, email_mesg, email_subj):
    """Sends the email

    Keyword arguments:
    sns -- SNS service resource
    topicArn -- ARN for the topic
        emailSubj -- Email subject
        emailMesg -- Email message
    """

    # STUDENT TODO 3: Replace the solution with your own code
    # solution.publish_email(sns, topic_arn, email_mesg, email_subj)
    topic = sns.Topic(topic_arn)
    topic.publish(Message=email_mesg, Subject=email_subj)


def convert_order_to_json(porder):
    """Return the order in JSON format

    Keyword arguments:
    porder -- the order
    """

    # STUDENT TODO 4: Replace the solution with your own code
    # return solution.convert_order_to_json(porder)
    json_order = json.dumps(porder, default=utils.jdefault, indent=4)
    return json_order


def publish_order(sns, topic_arn, json_order):
    """Sends the order message

    Keyword arguments:
    sns -- SNS service resource
        topicArn -- ARN for the topic
        jsonStr -- the order in JSON format
    """

    # STUDENT TODO 5: Replace the solution with your own code
    # solution.publish_order(sns, topic_arn, json_order)
    topic = sns.Topic(topic_arn)
    topic.publish(Message=json_order)


def main():
    try:
        publish_msgs()
    except Exception as err:
        print("Error Message {0}".format(err))

if __name__ == '__main__':
    main()
