$(function () {

    var data = {
        menuList: [{
            name: 'front',
            link: '0',
            dep: '0'
        }, {
            name: 'Publishing Guide',
            link: 'guide/guide.html',
            dep: '1',
            type: '',
            due: '',
            guide: '',
            check: 'progress',
            desc: 'test'
        }, {
            name: 'common',
            link: '',
            dep: '1',
            type: 'dialog',
            due: '',
            guide: '',
            check: 'ready',
            desc: 'test'
        }, {
            name: 'search layout',
            link: '1',
            dep: '2',
            type: 'dialog',
            due: '',
            guide: '',
            check: 'ready',
            desc: 'test'
        }, {
            name: '잡 관리',
            link: '2',
            dep: '1',
            guide: '',
            check: 'backlog',
            desc: 'test'
        }, {
            name: '잡 관리_잡 모니터링',
            link: '2-0',
            dep: '2',
            due: '',
            guide: 'page 2',
            check: 'backlog',
            desc: 'test'
        }, {
            name: '잡 히스토리 조회',
            link: '2-1',
            dep: '3',
            type: 'dialog',
            due: '',
            guide: 'page 3',
            check: 'backlog',
            desc: 'test'
        }, {
            name: '잡 설정',
            link: '2-0',
            dep: '2',
            due: '',
            guide: 'page 4',
            check: 'backlog',
            desc: 'test'
        }, {
            name: '잡 추가',
            link: '2-0',
            dep: '3',
            type: 'dialog',
            due: '',
            guide: 'page 5',
            check: 'backlog',
            desc: 'test'
        }, {
            name: '데이터 뷰어',
            link: '2-0',
            dep: '1',
            due: '',
            guide: 'page 11',
            check: 'backlog',
            desc: 'test'
        }, {
            name: '운영 정보 관리',
            link: '2-0',
            dep: '1',
            due: '',
            guide: 'page 17',
            check: 'backlog',
            desc: 'test'
        }, {
            name: '산출 단위/표준값 관리',
            link: '2-0',
            dep: '2',
            due: '',
            guide: 'page 17',
            check: 'backlog',
            desc: 'test'
        }, {
            name: '산출 단위 설정',
            link: '2-0',
            dep: '3',
            type: 'dialog',
            due: '',
            guide: 'page 18',
            check: 'backlog',
            desc: 'test'
        }, {
            name: '운영 정보 산출 관리',
            link: '2-0',
            dep: '1',
            due: '',
            guide: 'page 11',
            check: 'backlog',
            desc: 'test'
        }, {
            name: '산출 기준 관리',
            link: '2-0',
            dep: '2',
            due: '',
            guide: 'page 28',
            check: 'backlog',
            desc: 'test'
        }, {
            name: '산출 식 변경',
            link: '2-0',
            dep: '3',
            type: 'dialog',
            due: '',
            guide: 'page 29',
            check: 'backlog',
            desc: 'test'
        }, {
            name: '보정 유형 관리',
            link: '2-0',
            dep: '3',
            type: 'dialog',
            due: '',
            guide: 'page 31',
            check: 'backlog',
            desc: 'test'
        }, {
            name: '코드 추가',
            link: '2-0',
            dep: '4',
            type: 'dialog',
            due: '',
            guide: 'page 34',
            check: 'backlog',
            desc: 'test'
        }, {
            name: '공통 속성 관리',
            link: '2-0',
            dep: '1',
            due: '',
            guide: 'page ',
            check: 'backlog',
            desc: 'test'
        }, {
            name: '공통 코드 관리',
            link: '2-0',
            dep: '2',
            due: '',
            guide: 'page ',
            check: 'backlog',
            desc: 'test'
        }]
    };
    var getMenuItem = function (itemData) {

        var blank = function (len) {
            var blankTd = '<td class="blank"></td>'
            var blankTk = ''
            for (i = 0; i < len; i++) {
                blankTk = blankTk + blankTd
            }
            return blankTk
        }

        if (itemData.dep == '0') {
            var item = $("<td>")
                .append(
                $("<a>", {
                    href: itemData.link,
                    html: itemData.name
                })).add(
                blank(9)
            );
        } else if (itemData.dep == '1') {
            var item = $(blank(1)+ "<td>")
                .append(
                $("<a>", {
                    href: itemData.link,
                    html: itemData.name
                }))
                .add(blank(3))
                .add("<td><span class="+itemData.type+">"+itemData.type+"</span></td>")
                .add($("<td>", {html: itemData.due}))
                .add($("<td>", {html: itemData.guide}))
                .add("<td><span class="+itemData.check+">"+itemData.check+"</span></td>")
                .add($("<td>", {html: itemData.desc}))
        } else if (itemData.dep == '2') {
            var item = $(blank(2)+ "<td>")
                .append(
                $("<a>", {
                    href: itemData.link,
                    html: itemData.name
                }))
                .add(blank(2))
                .add("<td><span class="+itemData.type+">"+itemData.type+"</span></td>")
                .add($("<td>", {html: itemData.due}))
                .add($("<td>", {html: itemData.guide}))
                .add("<td><span class="+itemData.check+">"+itemData.check+"</span></td>")
                .add($("<td>", {html: itemData.desc}))
        } else if (itemData.dep == '3') {
            var item = $(blank(3)+ "<td>")
                .append(
                $("<a>", {
                    href: itemData.link,
                    html: itemData.name
                }))
                .add(blank(1))
                .add("<td><span class="+itemData.type+">"+itemData.type+"</span></td>")
                .add($("<td>", {html: itemData.due}))
                .add($("<td>", {html: itemData.guide}))
                .add("<td><span class="+itemData.check+">"+itemData.check+"</span></td>")
                .add($("<td>", {html: itemData.desc}))
        } else if (itemData.dep == '4') {
            var item = $(blank(4)+ "<td>")
                .append(
                $("<a>", {
                    href: itemData.link,
                    html: itemData.name
                }))
                .add("<td><span class="+itemData.type+">"+itemData.type+"</span></td>")
                .add($("<td>", {html: itemData.due}))
                .add($("<td>", {html: itemData.guide}))
                .add("<td><span class="+itemData.check+">"+itemData.check+"</span></td>")
                .add($("<td>", {html: itemData.desc}))
        } else {
        }

        return item;
    };

    var $menu = $("#guideMenu");
    $.each(data.menuList, function () {
        $menu.append(
            $("<tr>").append(
                getMenuItem(this)
            )
        )
        $(".blank").empty();
    });


});