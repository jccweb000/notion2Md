import{_ as a,o as e,c as d,O as o}from"./chunks/framework.eb48dd0f.js";const n=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Docs/employeeInfo.md","filePath":"Docs/employeeInfo.md"}'),c={name:"Docs/employeeInfo.md"},l=o('<h2 id="一、功能概览" tabindex="-1">一、功能概览 <a class="header-anchor" href="#一、功能概览" aria-label="Permalink to &quot;一、功能概览&quot;">​</a></h2><p>员工信息产品分为两部分，员工信息数据列表、员工页面配置。</p><h3 id="_1-业务功能" tabindex="-1">1.业务功能 <a class="header-anchor" href="#_1-业务功能" aria-label="Permalink to &quot;1.业务功能&quot;">​</a></h3><p>员工信息：记录并展现员工多维度信息，包含任职信息、个人信息、合同信息、奖惩信息、工作经历、教育经历等信息</p><h3 id="_2-实施配置" tabindex="-1">2.实施配置 <a class="header-anchor" href="#_2-实施配置" aria-label="Permalink to &quot;2.实施配置&quot;">​</a></h3><ol><li>员工页面配置：通过标准字段和自定义字段是否显示和是否必填的配置，生成员工多维度页面展示</li><li>员工人事设置：配置员工各个自己中需要维护的字典值</li></ol><h2 id="二、单个模块功能指引" tabindex="-1">二、单个模块功能指引 <a class="header-anchor" href="#二、单个模块功能指引" aria-label="Permalink to &quot;二、单个模块功能指引&quot;">​</a></h2><h3 id="_1-实施配置操作指引" tabindex="-1">1.实施配置操作指引 <a class="header-anchor" href="#_1-实施配置操作指引" aria-label="Permalink to &quot;1.实施配置操作指引&quot;">​</a></h3><h3 id="_1-1员工页面配置" tabindex="-1">1.1员工页面配置 <a class="header-anchor" href="#_1-1员工页面配置" aria-label="Permalink to &quot;1.1员工页面配置&quot;">​</a></h3><p>在【管理中心】--【乐高引擎】--【页面管理】中对员工信息详情中各个子集进行字段的显示和必填配置，点击右边的【编辑】小图标进入到，字段配置页面</p><p><img src="https://caidaopdd.feishu.cn/space/api/box/stream/download/asynccode/?code=MTI1OWJlYmFjOTBlZjJmYmVmMjViOWUwYzA1ZDU5YWVfV0ZrZEk2cnpNdGNaVHo4ZkZxc3lkRGRvcGkyZkxNcU1fVG9rZW46Ym94Y25UYW9kUlBNMzM5SWkyOHF1UmJDT2dnXzE2ODYwMzY3Njg6MTY4NjA0MDM2OF9WNA" alt="image"></p><p>在字段配置页面，进行字段的是否必填和是否展示配置，配置完成以后，点击右上角的【对号】图标，然后点击【保存】按钮，对配置好的逻辑进行保存，保存成功后，在员工信息详情页面该子集下，可看到配置后的字段</p><p><img src="https://caidaopdd.feishu.cn/space/api/box/stream/download/asynccode/?code=NmNmZTg0NjBmOGI3ODkwZDg2MGRhNmMyODBlNzRkMWFfQ0dLbmdoWUF3eUZQUzZMMlFPV3lCOWJZZEVaS1NlalRfVG9rZW46Ym94Y25tTXZPYTZDNTRpbWQ5elI3bEpIcnNmXzE2ODYwMzY3Njg6MTY4NjA0MDM2OF9WNA" alt="image"></p><h3 id="_1-2员工人事设置" tabindex="-1">1.2员工人事设置 <a class="header-anchor" href="#_1-2员工人事设置" aria-label="Permalink to &quot;1.2员工人事设置&quot;">​</a></h3><p>在【人事】--【人事设置】中，对员工信息那边的字典值进行维护</p><p><img src="https://caidaopdd.feishu.cn/space/api/box/stream/download/asynccode/?code=ZjJmNDM1ZGQxM2FiOTIyMGUyOWQ4MmQ4YzZkMDRhYjBfYnpKRklaTzRVQUdjVkxTdU9ra1hpM0l1SlNSSFhlZUxfVG9rZW46Ym94Y24wYTQ5d3NPRTFpSnAzWFhwamZZM0VmXzE2ODYwMzY3Njg6MTY4NjA0MDM2OF9WNA" alt="image"></p><p>初次进入，字典类型的【编辑】和【删除】状态为禁用状态的字典类型都是系统预置字典类型，无法删除和修改，在右方可对该字典类型新增具体的字典下拉值，可通过“字典类型”顶部的新增，新增新的字典类型。</p><h3 id="_2-员工信息操作指引" tabindex="-1">2.员工信息操作指引 <a class="header-anchor" href="#_2-员工信息操作指引" aria-label="Permalink to &quot;2.员工信息操作指引&quot;">​</a></h3><h3 id="_2-1员工列表" tabindex="-1">2.1员工列表 <a class="header-anchor" href="#_2-1员工列表" aria-label="Permalink to &quot;2.1员工列表&quot;">​</a></h3><p><img src="https://caidaopdd.feishu.cn/space/api/box/stream/download/asynccode/?code=MTBjZTU1YTlkMjM2ZWRkNWI1OTYyYjQ2Nzc2MzliNGFfaTRpeFZhbndQOXJ3Q0ttTzBUVzNpVk51eEJsemwyR01fVG9rZW46Ym94Y25RYlBDd0pkZGRrcEV0c2lYRjFJVDVnXzE2ODYwMzY3Njg6MTY4NjA0MDM2OF9WNA" alt="image"></p><p>1:在【员工信息】页面，左侧有时间和组织的选择，可通过时间轴的选择，查看当前时间轴下员工信息的详情数据，并且可通过组织切换，查看当前组织下的人员数据</p><p>2:在【员工信息】页面，顶部，可查看人员数据统计（是根据员工类型，和员工状态和主岗和兼岗进行统计的）</p><p>3:新增：在页面右上角，可通过新增，添加单个员工数据，</p><p>4:导入：也可通过导入，对员工数据进行批量添加（导入模版是通过导入中心配置实现）具体参考导入中心文档说明</p><p>并可根据员工的子集模块进行分段导入，（导入模版是通过导入中心配置实现）</p><p>导入中心文档地址：<a href="https://caidaopdd.feishu.cn/docx/Dj0kdzG1qoZEULxwCC6cNW6Unug?from=from_copylink" target="_blank" rel="noreferrer">导入中心</a></p><p><img src="https://caidaopdd.feishu.cn/space/api/box/stream/download/asynccode/?code=NWY3YTY4MmZmYTI4NTk0ODhkNDRkYzJlNWUzNjFhYTlfOFNtT3YzNEY0TkQwYjhPdzJ5eFVWNnFuQXc3Mkd5cldfVG9rZW46Ym94Y25xWXdDcEJNR29iNGJnY1BnT0QyM0dnXzE2ODYwMzY3Njg6MTY4NjA0MDM2OF9WNA" alt="image"></p><p><img src="https://caidaopdd.feishu.cn/space/api/box/stream/download/asynccode/?code=N2ExOGQ5MjFlNWMzODI4Y2IwNGFiMjRjMjM5ODJkMjZfN0pydFYxS0lQdkR5OXhHNmdFcVRUbzlXa1I4c1lBVElfVG9rZW46Ym94Y25yb2l3bDE5OGhvY29HdHo0VXI4YzdkXzE2ODYwMzY3Njg6MTY4NjA0MDM2OF9WNA" alt="image"></p><h3 id="_2-2员工信息详情页" tabindex="-1">2.2员工信息详情页 <a class="header-anchor" href="#_2-2员工信息详情页" aria-label="Permalink to &quot;2.2员工信息详情页&quot;">​</a></h3><p>双击员工【姓名】进入员工详情页</p><p><img src="https://caidaopdd.feishu.cn/space/api/box/stream/download/asynccode/?code=YTBkYmRiNTUyMDA1OTRiZWRkOThiYzEyYjZhYjgwM2VfeU5CcW43S3lyNzJqUWRiRUZnUGUxdjVNN2VPODN4VjhfVG9rZW46Ym94Y244RjR6enliY3pNd3JGNWVYSHhkZkZoXzE2ODYwMzY3Njg6MTY4NjA0MDM2OF9WNA" alt="image"></p><p>员工详情页，可通过右上角的时间轴选择，查看当前时间下，员工的详情数据，后期也可通过员工的【成长记录】，查看员工的整个周期内的，入职，转正，信息编辑，异动，离职的记录。</p><p><img src="https://caidaopdd.feishu.cn/space/api/box/stream/download/asynccode/?code=MTM0NmM3NzYxY2Y5ODc1ODEwYWYxOWRhNjEwNTFkOGFfRkhjbjVWNDV3QkljZ2FFa2RnNUx0OVhMYUVJQmRBV1lfVG9rZW46Ym94Y24zaEd1SWZzWld6Z2o4SFlqY0VnMlN4XzE2ODYwMzY3Njg6MTY4NjA0MDM2OF9WNA" alt="image"></p><p><img src="https://caidaopdd.feishu.cn/space/api/box/stream/download/asynccode/?code=ODQwNTliYjVjOGU1MWI0NDhiYzgwNTlmNWY1MGEyZjRfME1ac01vT2dSQ2NpcTB2NUVJV3FacDQ3WWYwWGdlZTlfVG9rZW46Ym94Y253VElpWkdiTmVtZVZiOVBBMmJEM1llXzE2ODYwMzY3Njg6MTY4NjA0MDM2OF9WNA" alt="image"></p><h3 id="_2-2-1员工信息子集-任职信息" tabindex="-1">2.2.1员工信息子集-任职信息 <a class="header-anchor" href="#_2-2-1员工信息子集-任职信息" aria-label="Permalink to &quot;2.2.1员工信息子集-任职信息&quot;">​</a></h3><p>员工任职信息中，包括任职信息详情，主岗记录，兼岗记录</p><p>任职信息详情：显示员工的全部的任职信息数据，可对该信息进行编辑操作</p><p><img src="https://caidaopdd.feishu.cn/space/api/box/stream/download/asynccode/?code=OGE5Yjk2OGQ2OTM1MjAwZThjYzVjMWJmZmVhZWY2NTBfV0lTOHlzOVJQMDFCR2ttd1cwRFpUTkdLYjQ0T1RLT2hfVG9rZW46Ym94Y25vRHplcU5zQW9Cb25BY1hJejl5eWlkXzE2ODYwMzY3Njg6MTY4NjA0MDM2OF9WNA" alt="image"></p><p>主岗记录：记录员工的岗位变动和岗位时长的统计，（员工的岗位通过入职流转或任职记录那边的编辑发生变更或者通过异动发生变更，都会在主岗记录中新增一条主岗记录）</p><p><img src="https://caidaopdd.feishu.cn/space/api/box/stream/download/asynccode/?code=Y2IxODY4NWMwMDNjZGUxNmNkMDRiOTRhYzRiNjIyMWVfR0E1b2UwelhKSFNaaE41MDFnUnVyR3p0dFF0aHg0QUdfVG9rZW46Ym94Y25sWXl2NVFGRU05VUEzcGdTakZ0aFRiXzE2ODYwMzY3Njg6MTY4NjA0MDM2OF9WNA" alt="image"></p><p>兼岗记录：记录员工的兼岗记录，可新增兼岗信息和编辑已有的兼岗信息</p><p><img src="https://caidaopdd.feishu.cn/space/api/box/stream/download/asynccode/?code=NmE1NWI1MzViNTk2MDdiMmJmYWM5ZDczMDAxODM2MGNfWGRTUkpKSlNQSWpJc2ltZDR3SlpTTGlzUm1KdTFCVnlfVG9rZW46Ym94Y25SSFNBSm04aThnbW5sdXRMalZyUkhnXzE2ODYwMzY3Njg6MTY4NjA0MDM2OF9WNA" alt="image"></p><h3 id="_2-2-1个人信息" tabindex="-1">2.2.1个人信息 <a class="header-anchor" href="#_2-2-1个人信息" aria-label="Permalink to &quot;2.2.1个人信息&quot;">​</a></h3><p>展示员工的基本信息，包括（基本信息，联系方式，证件信息，银行卡信息，紧急联系人），可对这些进行编辑操作</p><p><img src="https://caidaopdd.feishu.cn/space/api/box/stream/download/asynccode/?code=NmMwN2FkNzM0OGJkOGVmNjFhOWUzNmRhNjNmYzdkZmVfZ1RVcnVCcVBIdmlKZGx1SXRRWlJKY2h1QkZwcENYdThfVG9rZW46Ym94Y240M3lSdnJjUmRkUUlmcEFUYlBJNU1lXzE2ODYwMzY3Njg6MTY4NjA0MDM2OF9WNA" alt="image"></p><h3 id="_2-2-1非行政组织" tabindex="-1">2.2.1非行政组织 <a class="header-anchor" href="#_2-2-1非行政组织" aria-label="Permalink to &quot;2.2.1非行政组织&quot;">​</a></h3><p>记录员工的非行政组织架构信息，记录之前，需在组织那边先维护好非行政组织信息，然后在员工详情页通过新增维护员工的非行政组织信息，（目前该子集只做数据维护，没有具体的业务逻辑，后期会在组织架构图中通过切换架构，来查看该架构下的人员信息。）</p><p><img src="https://caidaopdd.feishu.cn/space/api/box/stream/download/asynccode/?code=MjE2OWU0MjE2NTNkNWQ4ZjlkMWVmMDA0NDM5YTRkZjhfM21mMVpZamFQYzF6am5ZZ3B2Q0Vxazl1Q1lJdVhkVElfVG9rZW46Ym94Y243WGxCR0dySW9raW81SkNydHp1d3BnXzE2ODYwMzY3Njg6MTY4NjA0MDM2OF9WNA" alt="image"></p><h3 id="_2-2-1合同信息" tabindex="-1">2.2.1合同信息 <a class="header-anchor" href="#_2-2-1合同信息" aria-label="Permalink to &quot;2.2.1合同信息&quot;">​</a></h3><p>展示员工当前合同信息，和记录合同记录，数据是通过【合同管理】那边流转过来的</p><p><img src="https://caidaopdd.feishu.cn/space/api/box/stream/download/asynccode/?code=MDJiZjg2OGRmNjRiOTkzMjVkZTk5OWM5ODJkMDFkNGNfdmtRVzA4Mlo1aGVNYVpqdm1FQW5GUnpsYTAxS1VrVnZfVG9rZW46Ym94Y254QWV6azFyYlA2VTRYMnFZRmRSZzZlXzE2ODYwMzY3Njg6MTY4NjA0MDM2OF9WNA" alt="image"></p><h3 id="_2-2-1工作经历" tabindex="-1">2.2.1工作经历 <a class="header-anchor" href="#_2-2-1工作经历" aria-label="Permalink to &quot;2.2.1工作经历&quot;">​</a></h3><p>记录员工的首次工作时间和工龄，以及历往工作经历，可进行编辑和新增的操作</p><p><img src="https://caidaopdd.feishu.cn/space/api/box/stream/download/asynccode/?code=NjdjOGIzM2JiNjk1MzgyMDg2ODdkNzg3ZDc4MDEwMWNfWkdSSEpKblFYT2xwZ1NUV3FFUHlqNEo5RThDTFBFNmNfVG9rZW46Ym94Y241Wnlpc1pzUXNTbVVmVDQ1S1UycjdkXzE2ODYwMzY3Njg6MTY4NjA0MDM2OF9WNA" alt="image"></p><h3 id="_2-2-1教育经历" tabindex="-1">2.2.1教育经历 <a class="header-anchor" href="#_2-2-1教育经历" aria-label="Permalink to &quot;2.2.1教育经历&quot;">​</a></h3><p>学历概括记录员工最高学历信息，教育记录维护员工的全部的教育经历，可进行编辑和新增的操作</p><p><img src="https://caidaopdd.feishu.cn/space/api/box/stream/download/asynccode/?code=NGE2ZDQ3Mzk5YjI5MjA0NTlmMDVhMDI4N2VjM2RjMDNfYk9uOVdyOHVTSUNvQ3B0ZnVsU3lWbjhUcVhlUWFSSzNfVG9rZW46Ym94Y25wZ0JVdjlhc2pNcU11OGx4WkJpMHJnXzE2ODYwMzY3Njg6MTY4NjA0MDM2OF9WNA" alt="image"></p><h3 id="_2-2-1家庭信息" tabindex="-1">2.2.1家庭信息 <a class="header-anchor" href="#_2-2-1家庭信息" aria-label="Permalink to &quot;2.2.1家庭信息&quot;">​</a></h3><p>维护家庭地址，和家庭成员信息，可做编辑和新增操作</p><p><img src="https://caidaopdd.feishu.cn/space/api/box/stream/download/asynccode/?code=MjZkNGUzZGFlNzc4M2NiMjUyOWM3NTAwNzg4M2NhN2Rfd2VvWDA0N0p6MERYT1U1amxzWDlFTldlMlpIaTlnN1pfVG9rZW46Ym94Y25MamZtSzJCWlNHYTJOVVpna09FbWNoXzE2ODYwMzY3Njg6MTY4NjA0MDM2OF9WNA" alt="image"></p><h3 id="_2-2-1奖惩信息" tabindex="-1">2.2.1奖惩信息 <a class="header-anchor" href="#_2-2-1奖惩信息" aria-label="Permalink to &quot;2.2.1奖惩信息&quot;">​</a></h3><p>可通过新增和导入维护奖惩信息</p><p><img src="https://caidaopdd.feishu.cn/space/api/box/stream/download/asynccode/?code=MDFhNWIyMjY4MzViMzljMmMwNDQzYjkzMDg3ODc1NDhfNVhlZzBxR3o2UjZyNnVBWVVCVE9YYjF3MFFFVDhTUVFfVG9rZW46Ym94Y245TENlREV2VDh1SmI5U0lmeFBZOXloXzE2ODYwMzY3Njg6MTY4NjA0MDM2OF9WNA" alt="image"></p><h3 id="_2-2-1附件档案" tabindex="-1">2.2.1附件档案 <a class="header-anchor" href="#_2-2-1附件档案" aria-label="Permalink to &quot;2.2.1附件档案&quot;">​</a></h3><p>员工的证件信息，学历信息，财务信息的附件资料档案存储，可进行【下载】，【查看】，【上传】</p><p><img src="https://caidaopdd.feishu.cn/space/api/box/stream/download/asynccode/?code=OTk3OGJiYWFjMGRmZjE4YjgyZjQ3ZjBkY2M1ODdlMjhfYlRGMWROSXNnU1doMXdRSk1wSUFDWG90d2R1bWw0MWxfVG9rZW46Ym94Y25IOW9kS0NMUjBUcFA5RW5tTEVrWWRnXzE2ODYwMzY3Njg6MTY4NjA0MDM2OF9WNA" alt="image"></p><h3 id="_2-2-1薪资信息" tabindex="-1">2.2.1薪资信息 <a class="header-anchor" href="#_2-2-1薪资信息" aria-label="Permalink to &quot;2.2.1薪资信息&quot;">​</a></h3><p>员工薪资的基础信息维护和调薪的记录展示（调薪记录从【人事异动】的【薪资信息】的变更中读取，若发生了薪资异动，异动流程审批完成后，会根据生效日期生成一条薪资变动记录）</p><p><img src="https://caidaopdd.feishu.cn/space/api/box/stream/download/asynccode/?code=NGZkOGQyNWY1NzA3ODYxM2JjYjVmNTk2Y2FlNWY5YjNfNHJUMTNOM3F5SjNJdGtlOU9QQ0l4QVBseDZrTU5kZmhfVG9rZW46Ym94Y25meGJGZTVOZDV1a1IweWhKdXh5WW9oXzE2ODYwMzY3Njg6MTY4NjA0MDM2OF9WNA" alt="image"></p><h3 id="_2-2-1语言能力" tabindex="-1">2.2.1语言能力 <a class="header-anchor" href="#_2-2-1语言能力" aria-label="Permalink to &quot;2.2.1语言能力&quot;">​</a></h3><p>通过【新增】，【编辑】可维护员工的语言能力以及熟练程度</p><p><img src="https://caidaopdd.feishu.cn/space/api/box/stream/download/asynccode/?code=MzFkNmIxMmU4OTRmZWU2MjBkYzQxNWViMTc4Nzg1MTlfWXk5Z2FqWFp1dEtMWEdOMEhCdkpES2RzWVNMTzBNdVVfVG9rZW46Ym94Y24zeFJhS2NJYm9KUFp1V0hnTk94TkNnXzE2ODYwMzY3Njg6MTY4NjA0MDM2OF9WNA" alt="image"></p><h3 id="_2-2-1培训经历" tabindex="-1">2.2.1培训经历 <a class="header-anchor" href="#_2-2-1培训经历" aria-label="Permalink to &quot;2.2.1培训经历&quot;">​</a></h3><p>记录员工的培训记录，可查看详细的培训的课程和实践，通过【新增】，【编辑】进行数据的维护</p><p><img src="https://caidaopdd.feishu.cn/space/api/box/stream/download/asynccode/?code=ZjY4MTMzMWYwNTlhYjE1Yjk5ZTQyYTFhMjUzY2U4NzRfbnliZDBNVW14aWRYQXFzM1NScnZydnZoSjJqZkhNTDVfVG9rZW46Ym94Y24yckxXSTRhdkhldFU2TWdWVFRwalJlXzE2ODYwMzY3Njg6MTY4NjA0MDM2OF9WNA" alt="image"></p><h3 id="_2-2-1证书及技能" tabindex="-1">2.2.1证书及技能 <a class="header-anchor" href="#_2-2-1证书及技能" aria-label="Permalink to &quot;2.2.1证书及技能&quot;">​</a></h3><p>记录员工的证书及技能，可查看详细的证书级别和证书获得日期，并通过【新增】，【编辑】进行数据的维护</p><p><img src="https://caidaopdd.feishu.cn/space/api/box/stream/download/asynccode/?code=M2I0MzNhM2I2ODg2MDI2MzYwOGRmNDJjNWEyOGQ5NzRfRGcyVlNrcm1MNHNtRkt2ZVpqczFGSmlkWTZ3dFRMdkJfVG9rZW46Ym94Y25XcTlXT3AzMWlVejhaTUM3T3FNM2tiXzE2ODYwMzY3Njg6MTY4NjA0MDM2OF9WNA" alt="image"></p>',78),i=[l];function p(t,M,h,N,r,s){return e(),d("div",null,i)}const m=a(c,[["render",p]]);export{n as __pageData,m as default};
