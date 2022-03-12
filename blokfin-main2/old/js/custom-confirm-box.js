const Confirm = {
    open (options) {
        options = Object.assign({}, {
            title: '',
            message: '',
            okText: 'OK',
            cancelText: 'Cancel',
            onok: function () {},
            oncancel: function () {}
        }, options);

        const html = `<div class="confirm">
                        <div class="confirm__window">
                            
                            <div class="confirm__titlebar">
                                <span class="confirm__title">${options.title}</span>
                                <button class="confirm__close">&times;</button>
                            </div>
                            
                            <div class="confirm__content">
                               ${options.message}
                            </div>

                            <div class="confirm__buttons">
                                <button class="confirm__button confirm__button--ok confirm__button--fill">${options.okText}</button>
                                <button class="confirm__button confirm__button--cancel">${options.cancelText}</button>
                            </div>
                            
                        </div>

                    </div>`



        const template = document.createElement('template')   ;
        template.innerHTML = html;   
        
        const confirmEl = template.content.querySelector(".confirm");
        const btnClose = template.content.querySelector(".confirm__close");
        const btnOk = template.content.querySelector(".confirm__button--ok");
        const btnCancel = template.content.querySelector(".confirm__button--cancel");


        btnOk.href = "index.html";
        confirmEl.addEventListener('click', e => {
            if(e.target === confirmEl){
                options.oncancel();
                this._close(confirmEl);
            }
        });

        btnOk.addEventListener('click', () => {
            options.onok();
            this._close(confirmEl);
            
        });

        [btnClose, btnCancel].forEach(el => {
            el.addEventListener('click', () => {
                options.oncancel();
                this._close(confirmEl);
            })
        });
     


        const templateContainer = document.querySelector(".template-confirm");
        templateContainer.appendChild(template.content);


        console.log(template);       
    },

    _close (confirmEl) {
        
        confirmEl.classList.add("confirm--close");

        confirmEl.addEventListener('animation-end', () => {
            document.body.removeChild(confirmEl);
        })

    }


}