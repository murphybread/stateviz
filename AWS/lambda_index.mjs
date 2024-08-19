import { EC2Client, StopInstancesCommand } from "@aws-sdk/client-ec2";

// Initialize the EC2 client
const ec2Client = new EC2Client({});

export const handler = async (event) => {
    const instanceIds = process.env.INSTANCE_IDS.split(',');

    const params = {
        InstanceIds: instanceIds
    };

    try {
        // Create and send the StopInstancesCommand
        const data = await ec2Client.send(new StopInstancesCommand(params));
        console.log('Instances stopped successfully:', JSON.stringify(data));
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Instances stopped successfully', data })
        };
    } catch (error) {
        console.error('Error stopping instances:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error stopping instances', error: error.message })
        };
    }
};
