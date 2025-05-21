/**
 * docker-info
 */
import { execSync } from 'child_process';
import { get } from 'https';
import { json } from 'stream/consumers';

export default function (containerName, path) {
    const container = process.env.CONTAINER;

    if (typeof containerName === "undefined") {
        console.error("please, specifiy a docker container by its name.");
        process.exit(1);
    }

    let json = '';
    try {
        const output = execSync(`docker inspect ${containerName}`, { encoding: 'utf-8' });
        json = JSON.parse(output);            
    } catch (err) {
        console.error('Error:', err.message);
        process.exit(1);
    }

    if (typeof path === 'undefined') {
        // Output everything        
        console.log(JSON.stringify(json[0], null, 2));    
    } else {
        getByPath(json, path)
    }
};

function getByPath(json, path) {
    if (!Array.isArray(json) || json.length === 0) {
        throw new Error("No result from docker inspect");
    }

    // Navigate through the object via key path
    const keys = path.split(".");
    let result = json[0];
    for (const key of keys) {
        if (result && key in result) {
            result = result[key];
        } else {
            console.error(`${path}: Key not found`);
            process.exit(1);
        }
    }

    // Pretty print result
    console.log(JSON.stringify(result, null, 2));
}