
# 一、功能概览


## 1.业务功能

1. 文件签署：包括签署流程、模板管理、模板包三个子菜单。
2. 签署流程：可以发起合同电子签并查看电子签的进度。
3. 模板管理：配置合同模板以及文件的签章位置。包括模板电子签和上传电子签。
4. 模板包：设置模板的匹配规则，并可以将多个模板绑定到一个模板包中同时签署。

## 2.配置功能

1. 模板管理：配置合同模板以及文件的签章位置。包括模板电子签和上传电子签。
2. 模板包：设置模板的匹配规则，并可以将多个模板绑定到一个模板包中同时签署。

# 二、配置功能操作指引


## 模板管理


配置合同模板以及文件的签章位置，包括模板电子签和上传电子签。


支持通过材料名称进行搜索。


支持新增、编辑、删除模板。注：已被模板包引用的材料不可删除。


新增文件模板需选择文件签署类型，分为上传电子签和模板电子签。


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/56dffd34-eb46-421f-93c9-6ba019606fef/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060010Z&X-Amz-Expires=3600&X-Amz-Signature=a50bccd0827fb4d54c05940126bd71c162d27898a040c0e30463f921a181fddf&X-Amz-SignedHeaders=host&x-id=GetObject)


模板管理新增/编辑页面：


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/131ddf4b-aab9-48c1-8334-46599d8132ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060010Z&X-Amz-Expires=3600&X-Amz-Signature=c771ce03dda980245b2892c7f011707dc719e9ef4ca4c7d29901c78e691445f2&X-Amz-SignedHeaders=host&x-id=GetObject)


## 模板包


设置模板的匹配规则，可以将多个模板绑定到一个模板包中同时签署。


支持通过合同模板名称进行搜索，可新增、编辑、删除模板匹配规则，点击模板名称可编辑模板内容。


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/431e87ad-4ee7-4657-a87a-803b6f8e2d49/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060010Z&X-Amz-Expires=3600&X-Amz-Signature=8ab44cb0aeeaa17eb60aa5c481289dd2c7a3ae4f83ea945e51b86b0da567eba6&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d82de18e-07c0-40db-a7a7-5e4d74554d80/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060010Z&X-Amz-Expires=3600&X-Amz-Signature=07fc10af6214192594d1013c0b6ded1802314a4aa80f072925dcf91177df34f2&X-Amz-SignedHeaders=host&x-id=GetObject)


模板名称：按需填写


模板说明：按需填写，非必填


所属业务流程：仅使用合同新签、合同续签


是否启用工作流：默认关闭，可手动开启


是否合并发送：影响员工H5签署页面的展示样式，打开后一个模板包的所有文件放在一个卡片中展示，关闭后一个文件一个卡片展示，默认关闭


匹配条件：配置该模板包与员工的匹配条件


## 开具证明配置


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e79c2db8-70dd-48ce-8099-78b62baff800/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060009Z&X-Amz-Expires=3600&X-Amz-Signature=b629912aaf6327beded3c0ffe3362f5c2ced8639faebf21cbde8915f5570803e&X-Amz-SignedHeaders=host&x-id=GetObject)


[embed]()


# 三、业务功能操作指引


## 签署流程


可以发起合同电子签并查看电子签的进度，分为待发起、签署中、已完成、作废中、已撤销、已作废六种进度。


支持以下通用筛选条件：姓名、合同名称、签订类型、合同公司、用工类型、发起日期、手机号、公司邮箱。


支持导出。


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/36e13d17-2c6f-437d-bed6-9a0f7859636d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060010Z&X-Amz-Expires=3600&X-Amz-Signature=8170fdfe4bd8ea80db409dfce67269bf7914fd5d2d3f20b66de1276f06b7218a&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 待发起

支持三种发起签署方式


发起签署（列表上方）：选人发起签署，支持导入多人批量发起


批量发起：选取列表多条数据发起签署


发起签署（列表右侧）：对指定数据发起签署


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c540b18e-5a4c-48a1-a234-e8d068ef59d0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060010Z&X-Amz-Expires=3600&X-Amz-Signature=e1eb56d02793b4954587c9b7c210cc8764d8ec62dcaaf4d16e1d720f0c2ee53b&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6aec2bc8-4cd3-4a54-ba1f-82134f005af9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060010Z&X-Amz-Expires=3600&X-Amz-Signature=0bae1ff821a43de1701616ab62152715c777c910561361ee69feedaa7fef072a&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9c763b3f-aeb3-42b8-9708-e7a170cccb54/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060010Z&X-Amz-Expires=3600&X-Amz-Signature=efa0ff89c65223c7ee380246fe866da10bae8ab932b0238287ffbd340b10052c&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8c42e504-7008-4993-bec5-b89a18dd8c01/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060010Z&X-Amz-Expires=3600&X-Amz-Signature=f342ae29cdf354c25322e3c69b78701e0314495ea51d0e38f60716cdb92de01b&X-Amz-SignedHeaders=host&x-id=GetObject)


合同模板：根据选取的签署员工，自动匹配符合条件的模板并从中选择


签署文件：选择合同模板后根据模板内容自动带出（模板设置见2.4 签署模板），上传文件、点击下载查看、删除不需要的文件


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6b23937d-ee7d-4869-8e66-23a10e5da2f4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060010Z&X-Amz-Expires=3600&X-Amz-Signature=88040f0d5e11c7138ed5228d056de095bbf7b8e531b4be82309c6748617f1c51&X-Amz-SignedHeaders=host&x-id=GetObject)


注：勾选列表页面多人，点击批量发起按钮系统自动判断员工与模板匹配情况。其中，黄色字体显示匹配失败，可能的原因为：该员工无匹配的模板，或该员工匹配的模板大于1个。

1. 处理中

查看未签署完成的合同记录，包括待员工签和待公司签两种类型。支持撤回未签署完成的合同、查看详情。


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/77017a8e-463c-420e-9d84-0a1b52c149ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060010Z&X-Amz-Expires=3600&X-Amz-Signature=2b5a9a20eab3bf658bf1be9cf926b081f40e2bfa5f34180320c302e38817fd1b&X-Amz-SignedHeaders=host&x-id=GetObject)


注：


点击详情在新窗口查看该签署中合同详情，点击合同附件的pdf文件自动下载文件到本地。若该文件为模板电子签，可核对其中带出字段是否正确。


如果模板电子签中的字段选择了“使用时手动填写”，那么需要员工填写提交对应字段后，预览的pdf才会带出


点击撤回在二次确认弹窗中输入撤回原因，点击确认后，该数据流转至“已撤销”标签页列表中。


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bb47aaa5-9dd1-4998-86dc-b82bc469a976/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060010Z&X-Amz-Expires=3600&X-Amz-Signature=0c3438a73abfd928d453a89de89c62634355f827283b41adb445f32bea5b4f99&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 已完成

查看签署完成的合同数据，支持作废已完成的合同，需要员工再次签署确认后，数据流转至“已作废”标签页列表中。


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/495933bf-ff28-43ab-b8e4-e07769031cea/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060009Z&X-Amz-Expires=3600&X-Amz-Signature=26514e3c968a9c65bcd6a83416242b2ba4120fb4b0e8c45fc1343bb4f512b021&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 作废中

发起作废后员工未签署的合同数据在此列表显示，支持查看详情。


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7a55b6b9-8767-4b48-83fb-397e6277e14c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060009Z&X-Amz-Expires=3600&X-Amz-Signature=d7bb4de843084cb89ac25d8f6440b19804df5c3e8ccc85a24518333239b52250&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 已撤销

已撤销的合同数据在此列表显示，支持重新发起和查看详情。


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/078d0599-0687-4ddc-85bc-062aefbd8033/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060010Z&X-Amz-Expires=3600&X-Amz-Signature=dc4e80660fc9a2236087810b78d825769730a8b23e5b5dc254e8a8491fc843fd&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 已作废

列表展示已作废的合同数据，支持查看详情，下载已作废的文件。


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cab8f664-4cdc-4d7e-aa4c-8a55d3d07440/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060010Z&X-Amz-Expires=3600&X-Amz-Signature=85613c5a8159ed8324f3680f93440af8c08257583f63c8bdb432e3d8d9c618e6&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2f48741c-4030-4572-b0a5-f03f39765993/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060010Z&X-Amz-Expires=3600&X-Amz-Signature=1a802d20b67c647287d9ef9c321df5f29e9d9191a685873041cc5d8692b57032&X-Amz-SignedHeaders=host&x-id=GetObject)


## 移动端文件签署流程

1. 登录

进入登录页面输入账号和密码进入首页，点击【合同】模块


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/04d742a0-5c59-436b-85c3-aefa7727330c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060009Z&X-Amz-Expires=3600&X-Amz-Signature=da801996b86b8d4c5c5a308a408cdc4f46c137981452ecce617e5fae7ecaf3dc&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 待我处理

### 去签署


需签署的文件展示在【待我处理】tab下，点击对应文件下的【去签署】按钮


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/65d25693-6a11-4c43-995a-8a086e8b2965/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060010Z&X-Amz-Expires=3600&X-Amz-Signature=af388be892bfe5f3610f9b13c767546e486d46041469b275d95579adce4aeb34&X-Amz-SignedHeaders=host&x-id=GetObject)


### 信息录入


填写需带入电子签文件的字段信息，如未配置填写字段则直接进入电子签文件预览页面。


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a50bf854-0932-4be3-b5f8-ccdba4908dcd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060039Z&X-Amz-Expires=3600&X-Amz-Signature=b43055bb7c53d2689f8cfb95e508485b7a2930e73fdf6a4c3f8a419e816cea1d&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c660669a-6256-480c-90e7-1d32694812a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060039Z&X-Amz-Expires=3600&X-Amz-Signature=c2b50d8ad7b019d63d2aa729053e86b82824d33974b54e6973c0bf8630d980a3&X-Amz-SignedHeaders=host&x-id=GetObject)


### 签名-完成签署


首次需点击【+】输入签名，维护后可点击选择，选择后签名将自动带入到签名位置。


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0df1705e-f039-4a3e-9e73-298b31e1c2e5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060043Z&X-Amz-Expires=3600&X-Amz-Signature=e9333e9a8a3628548f9ba3b39266de8251bc0d31111ceadfd0810851f60b3abe&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ec70c0f3-1da0-4e5f-bb8f-3570a814d9be/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060043Z&X-Amz-Expires=3600&X-Amz-Signature=7b69592c1539060cfbd04b36a7e3b310337c03d9e47a9fd12fb266a8e8978e60&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/eee1f3d7-d0ec-478c-86ab-941b68bf9efb/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060046Z&X-Amz-Expires=3600&X-Amz-Signature=cdf4a4ddb5aceabb5113238d15346203044b161a1ab544d77e969bbc1c012c88&X-Amz-SignedHeaders=host&x-id=GetObject)


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/88bed368-e163-4e92-bea0-7f1cb57510e2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060047Z&X-Amz-Expires=3600&X-Amz-Signature=57ac237babe5c903267543a7346100afbd467ac9a3f8c702909c77343c7bc25a&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 已处理

签署完成/签署失败的文件都流转至【已处理】tab，并支持下载。


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fab91c4b-a674-4900-8fe0-4270c0e9dc44/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060010Z&X-Amz-Expires=3600&X-Amz-Signature=e0a47322eb72e31edab741aaff84c60b80c3b938253b4847a83aebb07b4df0f5&X-Amz-SignedHeaders=host&x-id=GetObject)


## 开具证明

1. 登录

进入登录页面输入账号和密码进入首页，点击【开具证明】模块


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/35ef1d56-dbba-456d-a3a0-abceb466d246/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060010Z&X-Amz-Expires=3600&X-Amz-Signature=a86769055471f59b2d27c255f96d295853564d6414ea0034950fc5af9c1bf8e8&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 开具证明

模板类型选择【系统标注模板】选择


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c31d7eaa-3cd1-43cc-be5c-610af255cbed/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060014Z&X-Amz-Expires=3600&X-Amz-Signature=8412c387c2c681c3d599c819040a7a386ef6848cadb2f906231df2ee829e89ca&X-Amz-SignedHeaders=host&x-id=GetObject)


模板类型选择【系统标准模板】:


![Untitled.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b06ef75d-21bc-45b0-ac75-38c46ce79e5b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230609T060014Z&X-Amz-Expires=3600&X-Amz-Signature=ee803a32e2fb21272374869a45c3aa5caba88ae78883c4b5137feeb82d0026df&X-Amz-SignedHeaders=host&x-id=GetObject)

