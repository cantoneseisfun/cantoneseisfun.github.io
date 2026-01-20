        
        let lastScrollTop = 0;
        const navbar = document.getElementById("navbar");
        const navbarHeight = navbar.offsetHeight;

        window.addEventListener("scroll", function() {
            // Get current scroll position
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Prevent negative scrolling (bounce effect on mobile)
            if (scrollTop < 0) {
                scrollTop = 0;
            }

            if (scrollTop > lastScrollTop) {
                // User is scrolling DOWN
                // Move the navbar up by its height (negative top value)
                navbar.style.top = `-${navbarHeight}px`;
            } else {
                // User is scrolling UP
                // Reset top to 0
                navbar.style.top = "0";
            }
            
            // Update last scroll position
            lastScrollTop = scrollTop;
        });