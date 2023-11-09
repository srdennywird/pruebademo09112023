import { app, InvocationContext } from "@azure/functions";
import * as https from "https";
import * as df from 'durable-functions';
import { ActivityHandler, OrchestrationContext, OrchestrationHandler } from 'durable-functions';

codigo generado

export async function serviceBusQueueTrigger(message: unknown, context: InvocationContext): Promise<void> {
    context.log('Service bus queue function processed message:', message);
    const client = df.getClient(context);
    const instanceId: string = await client.startNew("{{orchestratorName}}", message);
    context.log(`Started orchestration with ID = '${instanceId}'.`);
}
app.serviceBusQueue('nombre_orquestador', {
    connection: 'cadena_de_conexion',
    queueName: 'nombre_cola',
    handler: serviceBusQueueTrigger,
    extraInputs: [df.input.durableClient()],
});