/*
example in http request, and you have to add
1) authentication
2) logging
3) retrying
 */

// component (http)

interface HttpRequest {
    send(): void;
}

// implementation of component (basic http)

class basicHttpRequest implements HttpRequest {
    send() {
        console.log("sending normal http request");
    }
}

// Decorator abstract class
abstract class HttpRequestDecorator implements HttpRequest {
    protected httpRequest: HttpRequest;

    constructor(httpRequest: HttpRequest) {
        this.httpRequest = httpRequest;
    }

    send() {
        this.httpRequest.send();
    }
}

// Authentication Decorator (concrete decorator)

class AuthenticationDecorator extends HttpRequestDecorator {
    private readonly token: string;

    constructor(httpRequest: HttpRequest, token: string) {
        super(httpRequest);
        this.token = token;
    }

    send() {
        console.log("adding authentication header", this.token);
    }
}


// Logging Decorator (concrete decorator)

class LoggingDecorator extends HttpRequestDecorator {
    send() {
        console.log("logging request");
        super.send();
        console.log("Request logged");
    }
}

// Retrying Decorator (concrete decorator)

class RetryingDecorator extends HttpRequestDecorator {
    private retryCount: number;

    constructor(httpRequest: HttpRequest, retryCount: number) {
        super(httpRequest);
        this.retryCount = retryCount
    }
    send() {
        while (this.retryCount > 0) {
            try {
                console.log(`Sending request, retry count: ${this.retryCount}`);
                console.log("retrying request");
                super.send();
                console.log("Request succeeded.");
                return
            }catch (error) {
                console.log("Request failed in attempt : ", this.retryCount);
                this.retryCount--;
            }
        }

        console.log("Request failed after all attempts");
    }
}


let request: HttpRequest = new basicHttpRequest();
request.send();

request = new AuthenticationDecorator(request, "my-token");

request = new LoggingDecorator(request);

request = new RetryingDecorator(request, 3);
request.send();