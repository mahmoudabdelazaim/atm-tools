
        // Example book data to load on page load
        const books = [
            {
                title: "CMD-V4 : Sensor & Actor Overview",
                author: "Diebold Nixdorf",
                image: "https://lh3.googleusercontent.com/pw/AP1GczMzrgB8flHrZLtu_LDAG-uowurH8WuY-HhSfHVAY6jciGQUMf-a4WqI5Gg2OuP9eCN629LwGHAbjXd_hV-kSkjnPDzufYvogA41j8-FiTkl8vfX_klhJkG7O9cBSi9DOU_Mh3O_wMwD0sigoqm0dsIt=w608-h786-s-no-gm?authuser=0",
                pdf: "https://drive.google.com/file/d/1nr6tmJfhxwn9gMtU7O3yGexbaKgXbX9Y/preview"
            },
            {
                title: "CMD-V4 : Engineer Service  Dispenser Repair Guide",
                author: "Diebold Nixdorf",
                image: "https://lh3.googleusercontent.com/pw/AP1GczP2Bf33UupgsoKU-cBM5QoIAbKg7RcoT0gTz9oAFFj5IU1W6F0C6re-QLtzUbMl6RgB2dRw3s685A9dj7hT600Wf8bNouxa8ks07LrH3zc0YSqmqmo9aYGBhEHvLDlpY0AslEgaqD2gHfQRHUYfX-CS=w632-h748-s-no-gm?authuser=0",
                pdf: "https://drive.google.com/file/d/1TxzTCEpso0nJ0TDN1Ml7i-Z60iBFj2ee/preview"
            },
            {
                title: "CMD-V4 : Manual 2",
                author: "Diebold Nixdorf",
                image: "https://lh3.googleusercontent.com/pw/AP1GczNawaOH77woaaee4I-C0x94HuwMesNUetP2THmxAlfg79CaLktcgsqp6sgKQOA0x0eKJSvEBP_nPWMV3otIY0TJm012Lavi95XjSpOzWYXxbXOrCQJRk03LcwaG_R_aZEFcxzWonIUr_v6usXA_Yhwz=w592-h743-s-no-gm?authuser=0",
                pdf: "https://drive.google.com/file/d/1CjFVvyqeQzbDCNKxAigLobnPY2Y2zRuE/preview"
            },
            {
                title: "CMD-V4 : Processes (schematic)",
                author: "Diebold Nixdorf",
                image: "https://lh3.googleusercontent.com/pw/AP1GczNawaOH77woaaee4I-C0x94HuwMesNUetP2THmxAlfg79CaLktcgsqp6sgKQOA0x0eKJSvEBP_nPWMV3otIY0TJm012Lavi95XjSpOzWYXxbXOrCQJRk03LcwaG_R_aZEFcxzWonIUr_v6usXA_Yhwz=w592-h743-s-no-gm?authuser=0",
                pdf: "https://drive.google.com/file/d/1XrTjE9M921aUWE_CsLDqM7NvrHNDO1nw/preview"
            },
            {
                title: "CMD-V4 : Service Manual",
                author: "Diebold Nixdorf",
                image: "https://lh3.googleusercontent.com/pw/AP1GczP94iPy0tv-mD7RvGgpeFNba_3h9nsTZCpPZYAjhXeZ83JhMs3z34Kc3PjD8Ami4qtX29sejHLd-BOqcOcRGEqG1mMMdsuW0qMnTtdBO9TNrOE7XLYqNNGoEhvYw_T4MZw3YVuYtNSNwuCfbT-v4uFX=w605-h736-s-no-gm?authuser=0",
                pdf: "https://drive.google.com/file/d/1BSQlGN9Hdb77OgHokFSYRdAjk2jmFxqg/preview"
            },
            {
                title: "CMD-V4: Cash Media Dispenser Version 4 Software Manual ",
                author: "Diebold Nixdorf",
                image: "https://lh3.googleusercontent.com/pw/AP1GczP94iPy0tv-mD7RvGgpeFNba_3h9nsTZCpPZYAjhXeZ83JhMs3z34Kc3PjD8Ami4qtX29sejHLd-BOqcOcRGEqG1mMMdsuW0qMnTtdBO9TNrOE7XLYqNNGoEhvYw_T4MZw3YVuYtNSNwuCfbT-v4uFX=w605-h736-s-no-gm?authuser=0",
                pdf: "https://drive.google.com/file/d/1rntsyRIwx0orewDceTC-NS6CNeRi86En/preview"
            },
            {
                title: "CCDM : Check / Cash Deposit Module Service Manual",
                author: "Diebold Nixdorf",
                image: "https://lh3.googleusercontent.com/pw/AP1GczPiLLPA-ue3mUtW396nC2s-1FatImaPprbM2Irh1I5NfKwR05UttvTiwXyh05wyn27-bJy1pxuvIlbh8IcBuUlgZrop_072OdJ-boUZzfl5O0jw-jDPTMZ5gPZgjkK9xxQfzj8LMCHY3L71cwuGXbit=w576-h726-s-no-gm?authuser=0",
                pdf: "https://drive.google.com/file/d/16iflgTKBrsRBw3u-FWbpy8Gx7imil29U/preview"
            },
            {
                title: "CCDM : Service Manual",
                author: "Diebold Nixdorf",
                image: "https://lh3.googleusercontent.com/pw/AP1GczPiLLPA-ue3mUtW396nC2s-1FatImaPprbM2Irh1I5NfKwR05UttvTiwXyh05wyn27-bJy1pxuvIlbh8IcBuUlgZrop_072OdJ-boUZzfl5O0jw-jDPTMZ5gPZgjkK9xxQfzj8LMCHY3L71cwuGXbit=w576-h726-s-no-gm?authuser=0",
                pdf: "https://drive.google.com/file/d/1eYC1r6YnJCRz2IAxN6C_EmqquPfm4ldl/preview"
            },
            {
                title: "CCDM : Device  Overview and Error Status Codes",
                author: "Diebold Nixdorf",
                image: "https://lh3.googleusercontent.com/pw/AP1GczOMvPQIIyDiZ-xgKtfcZdArX4HhDUJNigeCHN6Fyvk8yisd-DraIZUX3WuPcy7eHJs7VdvMYHDLxoiVI47vdnKl9cpngcpwy9Q6X6v5tTGP-Phl9nswnktGlCNi3ENnuNH8o2Yk3Rd21Et_4OKeqgQ2=w525-h734-s-no-gm?authuser=0",
                pdf: "https://drive.google.com/file/d/1C1IHjTPyiOu3fFq-U-BUPT5HQZWAhNo6/preview"
            },
            {
                title: "CINEO-2560 Service Manual",
                author: "Diebold Nixdorf",
                image: "https://lh3.googleusercontent.com/pw/AP1GczNeK98fHzm1vN-sB6qWhycG2UNXDA4W5mHJG8eHtJ7foTvwedKCe4F6cMyG_8eYN-uV4mqjed4P8hUtPpH4satrR86b9HKnUX7oTh-6bD3FTr-HMgTxEFpRNpsCys47xdRb61HvRuauKFOK554Rcv7u=w564-h704-s-no-gm?authuser=0",
                pdf: "https://drive.google.com/file/d/1WwcaRBk-fq_kGgj-5mmeFsEznhGKgTHh/preview"
            },
            {
                title: "",
                author: "Diebold Nixdorf",
                image: "",
                pdf: ""
            },
            {
                title: "",
                author: "Diebold Nixdorf",
                image: "",
                pdf: ""
            },
            {
                title: "",
                author: "Diebold Nixdorf",
                image: "",
                pdf: ""
            }

        ];

        // Load books into the library
        books.forEach(addBookToLibrary);
   