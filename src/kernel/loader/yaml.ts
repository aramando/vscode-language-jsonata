const yaml = require('js-yaml');

export default function loadYaml(fileString: string) : Promise<unknown> {
     try {
        return Promise.resolve(yaml.load(fileString));
    } catch(e) {
        return Promise.reject(e);
    }
}