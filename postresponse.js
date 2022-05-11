
  (function () {
    const template = document.createElement('template')
    template.innerHTML = `
        <style>
        </style>
        <div id="root" style="width: 100%; height: 100%;">
        </div>
      `
    class MainWebComponent extends HTMLElement {
        // ------------------
        // Scripting methods
        // ------------------     
        postResponse(url, data) {
            let d = new Date();
            let IdeKey = "" + d.getTime();
            const settings = {
                "async": true,
                "crossDomain": true,
                "url": url,
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json",
                    "Idempotency-Key": IdeKey,
                    "X-API-TOKEN": "xEzzbfA6gHdjpJ7y7Yabo4MQfHXooWD17zoRL6Y6"
                },
                "processData": false,
                "data" : data
            };

            console.log(settings);
            let response_id = '';

            $.ajax(settings).done(function (response) {
                console.log(response.result.responseId);
                response_id = response.result.responseId
            });

            return response_id

        }
    } 
    customElements.define('com-qualtrics', MainWebComponent)
  })()